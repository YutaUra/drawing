<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" v-for="room in rooms" :key="room.id">
        <v-card elevation="4">
          <v-card-title class="title">
            {{ room.name }}
            <v-icon v-if="room.use_pass">mdi-lock-outline</v-icon>
          </v-card-title>
          <v-card-subtitle> 作成者 {{ room.owner_user.name }} </v-card-subtitle>
          <v-card-subtitle v-if="room.participant_user">
            参加者 {{ room.participant_user.name }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn :to="{ name: 'Room', params: { id: room.id } }">詳細</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ExStore } from 'vuex'
// eslint-disable-next-line
import { Picture_Game } from '../generated/graphql'
import gql from 'graphql-tag'
import { auth } from '../plugins/firebase'

@Component
export default class RoomSearch extends Vue {
  $store!: ExStore

  // eslint-disable-next-line
  rooms: Picture_Game[] = []
  loading = false

  created() {
    this.fetchRoom()
  }

  async fetchRoom() {
    this.loading = true
    try {
      const res = await this.$apollo.query({
        query: gql`
          query FETCH_MY_ROOMS($userId: String!) {
            picture_game(
              where: {
                _or: [
                  { owner: { _eq: $userId } }
                  { participant: { _eq: $userId } }
                ]
              }
            ) {
              id
              name
              use_pass
              is_open
              is_start
              owner_user {
                name
                photo_url
              }
              participant_user {
                name
                photo_url
              }
            }
          }
        `,
        variables: {
          userId: auth.currentUser ? auth.currentUser.uid : ''
        }
      })
      this.rooms = res.data.picture_game
    } finally {
      this.loading = false
    }
  }
}
</script>
