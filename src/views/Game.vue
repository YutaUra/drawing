<template>
  <v-container style="height: 90%;">
    <v-row class="flex-column">
      <v-col cols="1" style="min-width: 100%;">
        <span class="title">Game</span>
        <span class="caption pl-1">
          {{
            game.drawing_user_user ? game.drawing_user_user.name : ''
          }}さんの番です
        </span>
      </v-col>
      <v-col>
        <palette
          @change="change($event)"
          :clear="clear"
          @clear="clear = $event"
          :back="back"
          @back="back = $event"
          :forward="forward"
          @forward="forward = $event"
          :disable="disable"
          :cache="true"
          :cacheKey="`game-${gameId}-cache`"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" sm="1" class="text-center">
        <v-btn small @click="clear = true">
          <v-icon>mdi-new-box</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="3" sm="1" class="text-center">
        <v-btn small @click="back = true">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="3" sm="1" class="text-center">
        <v-btn small @click="forward = true">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="3" sm="1" class="text-center">
        <v-btn
          small
          @click="sizeRatioChange(-0.05)"
          :disabled="sizeRatio <= 0.2"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="3" sm="1" class="text-center">
        <v-btn
          small
          @click="sizeRatioChange(0.05)"
          :disabled="sizeRatio >= 0.95"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <palette-view
          :propLines="jsonDataParsed"
          :propSync="true"
          :sizeRatio="sizeRatio"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ExStore } from 'vuex'
import gql from 'graphql-tag'
// eslint-disable-next-line
import { Picture_Game_History, Picture_Game } from '../generated/graphql'
import { auth } from '../plugins/firebase'
import { round } from '../util/palette/lines'

@Component({
  components: {
    Palette: () => import('@/components/Palette.vue'),
    PaletteView: () => import('@/components/PaletteView.vue')
  },
  apollo: {
    $subscribe: {
      histories: {
        query: gql`
          subscription SUBSCRIBE_DRAW_HISTORY($id: uuid!) {
            game: picture_game_by_pk(id: $id) {
              id
              drawing_user_user {
                id
                name
              }
              picture_game_histories {
                id
                picture {
                  id
                  json_data
                  name
                  url
                  user {
                    id
                    name
                    photo_url
                  }
                }
              }
            }
          }
        `,
        variables() {
          return {
            id: this.$route.params.id
          }
        },
        // eslint-disable-next-line
        result(res: { data: { game: Picture_Game } }) {
          this.histories = res.data.game.picture_game_histories
          this.game = res.data.game
        }
      }
    }
  }
})
export default class Game extends Vue {
  $store!: ExStore

  jsonData = '[]'
  dataUrl = ''
  clear = false
  back = false
  forward = false
  sizeRatio = 0.95
  create = true
  currentPictureId = ''

  sizeRatioChange(diff: number) {
    this.sizeRatio = round(this.sizeRatio + diff, 2)
  }

  get disable() {
    if (!this.game.drawing_user_user) return true
    if (!auth.currentUser) return true
    // return this.game.drawing_user_user.id != auth.currentUser.uid
    return false
  }
  // eslint-disable-next-line
  histories: Picture_Game_History[] = []
  // eslint-disable-next-line
  get lastHistory(): Picture_Game_History {
    return this.histories
      .filter((hist) => {
        if (!auth.currentUser) return false
        return hist.picture.user.id != auth.currentUser.uid
      })
      .slice(-1)[0]
  }
  // eslint-disable-next-line
  game: Picture_Game = {} as any

  change(event: Event & { json: string; dataUrl: string }) {
    this.jsonData = event.json
    this.dataUrl = event.dataUrl
    this.sync()
  }

  async sync() {
    // json dataを同期
    if (this.create) {
      if (!auth.currentUser) return
      this.create = false
      try {
        const res = await this.$apollo.mutate({
          mutation: gql`
            mutation CREATE_PICTURE(
              $gameId: uuid!
              $json: String!
              $userId: String!
            ) {
              history: insert_picture_game_history_one(
                object: {
                  game_id: $gameId
                  picture: { data: { json_data: $json, user_id: $userId } }
                }
              ) {
                picture {
                  id
                }
              }
            }
          `,
          variables: {
            gameId: this.gameId,
            json: this.jsonData,
            userId: auth.currentUser.uid
          }
        })
        this.currentPictureId = res.data.history.picture.id
      } catch {
        this.create = true
      }
    } else {
      if (!this.currentPictureId) return
      await this.$apollo.mutate({
        mutation: gql`
          mutation UPDATE_PICTURE_JSON($pictureId: uuid!, $json: String!) {
            update_draw_picture_by_pk(
              pk_columns: { id: $pictureId }
              _set: { json_data: $json }
            ) {
              id
            }
          }
        `,
        variables: {
          pictureId: this.currentPictureId,
          json: this.jsonData
        }
      })
    }
  }

  get jsonDataParsed() {
    if (!this.lastHistory) return []
    return JSON.parse(this.lastHistory.picture.json_data)
  }

  get gameId() {
    return this.$route.params.id
  }
}
</script>
