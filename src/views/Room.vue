<template>
  <v-container v-if="!!room.id">
    <v-row>
      <v-col class="title">
        Room {{ room.name }}
        <v-icon v-if="room.use_pass">mdi-lock-outline</v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="subtitle-1">作成者 {{ room.owner_user.name }}</v-col>
    </v-row>
    <v-row v-if="room.participant_user">
      <v-col class="subtitle-1">参加者 {{ room.participant_user.name }}</v-col>
    </v-row>
    <v-row v-else>
      <v-col class="subtitle-1">参加者はまだいません</v-col>
    </v-row>
    <v-row>
      <v-col v-if="!room.participant_user && room.use_pass">
        <v-text-field
          label="パスフレーズ"
          placeholder="0000"
          type="number"
          v-model="pass"
        />
      </v-col>
      <v-col class="text-center">
        <v-btn
          v-if="isOwner"
          :disabled="!room.is_open || !room.participant_user"
          :loading="loading"
          @click="startGame"
        >
          開始する
        </v-btn>
        <v-btn
          @click="joinRoom"
          :loading="loading"
          v-else-if="!room.participant_user"
        >
          参加する
        </v-btn>
        <v-btn
          @click="exitRoom"
          :loading="loading"
          v-else-if="room.participant_user.id === userId"
        >
          退出する
        </v-btn>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" top style="position: absolute;">
      {{ text }}
      <v-btn color="red" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { ExStore } from 'vuex'
// eslint-disable-next-line
import { Picture_Game } from '../generated/graphql'
import gql from 'graphql-tag'
import { auth } from '@/plugins/firebase'
import { sha256 } from 'js-sha256'

@Component({
  apollo: {
    $subscribe: {
      room: {
        query: gql`
          subscription FETCH_ROOM($id: uuid!) {
            room: picture_game_by_pk(id: $id) {
              id
              name
              owner_user {
                id
                name
                photo_url
              }
              participant_user {
                id
                name
                photo_url
              }
              is_open
              is_start
              use_pass
            }
          }
        `,
        variables() {
          return { id: this.$route.params.id }
        },
        // eslint-disable-next-line
        async result(res: { data: { room: Picture_Game } }) {
          this.room = res.data.room
          if (res.data.room.is_start) {
            this.$router.push({
              name: 'Game',
              params: { id: res.data.room.id }
            })
          }
        }
      }
    }
  }
})
export default class Room extends Vue {
  $store!: ExStore

  // eslint-disable-next-line
  room: Picture_Game = {} as Picture_Game
  loading = false
  snackbar = false
  text = ''
  pass = ''

  get roomId() {
    return this.$route.params.id
  }

  get user(): firebase.User | null {
    if (auth.currentUser) return auth.currentUser
    return null
  }

  get userId() {
    if (this.user) return this.user.uid
    return ''
  }

  get isOwner() {
    return this.room.owner_user.id === this.userId
  }

  @Watch('room')
  // eslint-disable-next-line
  roomChange(newRoom: Picture_Game, oldRoom: Picture_Game) {
    if (oldRoom.participant_user === null && newRoom.participant_user != null) {
      this.text = `${newRoom.participant_user.name}さんが参加しました！`
      this.snackbar = true
    }
    if (oldRoom.participant_user != null && newRoom.participant_user === null) {
      this.text = `${oldRoom.participant_user.name}さんが退出しました。`
      this.snackbar = true
    }
  }

  async joinRoom() {
    this.loading = true
    try {
      if (this.room.use_pass) {
        console.log(sha256(this.pass))

        const res = await this.$apollo.mutate({
          mutation: gql`
            mutation JOIN_ROOM_WITH_PASS(
              $id: uuid!
              $userId: String!
              $pass: String!
            ) {
              room: update_picture_game(
                where: {
                  _and: [{ id: { _eq: $id } }, { pass: { _eq: $pass } }]
                }
                _set: { participant: $userId }
              ) {
                returning {
                  id
                }
              }
            }
          `,
          variables: {
            id: this.roomId,
            userId: this.userId,
            pass: sha256(this.pass)
          }
        })
        if (!res.data.room.returning[0]) {
          this.text = 'パスフレーズが違います。'
          this.snackbar = true
        }
      } else {
        await this.$apollo.mutate({
          mutation: gql`
            mutation JOIN_ROOM_WITHOUT_PASS($id: uuid!, $userId: String!) {
              room: update_picture_game(
                where: { id: { _eq: $id } }
                _set: { participant: $userId }
              ) {
                returning {
                  id
                }
              }
            }
          `,
          variables: {
            id: this.roomId,
            userId: this.userId
          }
        })
      }
    } finally {
      this.loading = false
    }
  }

  async exitRoom() {
    this.loading = true
    try {
      await this.$apollo.mutate({
        mutation: gql`
          mutation EXIT_ROOM($id: uuid!) {
            room: update_picture_game(
              where: { id: { _eq: $id } }
              _set: { participant: null }
            ) {
              returning {
                id
              }
            }
          }
        `,
        variables: {
          id: this.roomId
        }
      })
      this.$router.push({ name: 'SearchRoom' })
    } finally {
      this.loading = false
    }
  }

  async startGame() {
    this.loading = true
    try {
      await this.$apollo.mutate({
        mutation: gql`
          mutation START_GAME($id: uuid!) {
            room: update_picture_game_by_pk(
              pk_columns: { id: $id }
              _set: { is_start: true }
            ) {
              id
            }
          }
        `,
        variables: {
          id: this.roomId
        }
      })
      this.$router.push({ name: 'Game', params: { id: this.roomId } })
    } finally {
      this.loading = false
    }
  }
}
</script>
