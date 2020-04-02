<template>
  <v-container>
    <v-row v-if="!!disable" align="center">
      <v-col cols="8" class="red--text text-center">
        すでに部屋に参加しています。
      </v-col>
      <v-col cols="4" class="text-center">
        <v-btn :to="{ name: 'Room', params: { id: disable } }" outlined>
          移動する
        </v-btn>
      </v-col>
    </v-row>
    <v-row style="position: relative;">
      <v-col class="text-center title">
        部屋を作成する
      </v-col>
      <div :class="'fade-layer__' + (!!disable ? 'visible' : 'hidden')" />
    </v-row>

    <v-row align="end" style="position: relative;">
      <v-col cols="12" md="6">
        <v-text-field
          :disabled="!!disable"
          placeholder="部屋名"
          :rules="[() => !!name || 'This field is required']"
          v-model="name"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-switch
          :disabled="!!disable"
          v-model="usePass"
          :prepend-icon="usePass ? 'mdi-lock-outline' : 'mdi-lock-open-outline'"
        />
        <v-text-field
          :disabled="!!disable"
          v-if="usePass"
          placeholder="数字４桁で指定"
          v-model="pass"
          :rules="[
            () =>
              pass.length == 0 ||
              pass.length == 4 ||
              'パスフレーズは４文字で設定してください'
          ]"
          type="number"
        />
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn
          :loading="loading"
          :disabled="!!disable || !name || (usePass && pass.length != 4)"
          @click="createRoom"
        >
          作成
        </v-btn>
      </v-col>
      <div :class="'fade-layer__' + (!!disable ? 'visible' : 'hidden')" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ExStore } from 'vuex'
import gql from 'graphql-tag'
import { sha256 } from 'js-sha256'
import { auth } from 'firebase'

@Component
export default class CreateRoom extends Vue {
  $store!: ExStore

  disable = ''
  name = ''
  usePass = false
  pass = ''
  loading = false

  async createRoom() {
    this.loading = true
    try {
      const res = await (this.usePass
        ? this.$apollo.mutate({
            mutation: gql`
              mutation CREATE_ROOM_WITH_PASS($name: String!, $pass: String!) {
                insert_picture_game_one(
                  object: { name: $name, pass: $pass, use_pass: true }
                ) {
                  id
                }
              }
            `,
            variables: {
              name: this.name,
              pass: this.hashedPass
            }
          })
        : this.$apollo.mutate({
            mutation: gql`
              mutation CREATE_ROOM($name: String!) {
                insert_picture_game_one(
                  object: { name: $name, use_pass: false }
                ) {
                  id
                }
              }
            `,
            variables: {
              name: this.name
            }
          }))
      const id = res.data.insert_picture_game_one.id as string
      this.$router.push({ name: 'Room', params: { id: id } })
    } finally {
      this.loading = false
    }
  }

  get uid() {
    const user = auth().currentUser
    if (user != null) return user.uid
    return ''
  }

  get hashedPass() {
    return this.pass ? sha256(this.pass) : ''
  }

  async created() {
    const res = await this.$apollo.query({
      query: gql`
        query CAN_CREATE_ROOM($userId: String!) {
          picture_game(
            where: {
              _and: [
                { is_open: { _eq: true } }
                {
                  _or: [
                    { owner: { _eq: $userId } }
                    { participant: { _eq: $userId } }
                  ]
                }
              ]
            }
          ) {
            id
          }
        }
      `,
      variables: {
        userId: this.uid
      }
    })
    console.log(res)
    if (res.data.picture_game[0]) {
      this.disable = res.data.picture_game[0].id
    } else {
      this.disable = ''
    }
  }

  prevent(event: Event) {
    if (this.disable) {
      event.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin fade {
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;

  background-color: #000000;
  opacity: 0.5;
  z-index: 1;
}
.fade-layer__ {
  &visible {
    @include fade;
    visibility: visible;
  }
  &hidden {
    @include fade;
    visibility: hidden;
  }
}
</style>
