<template>
  <v-container style="height: 90%;">
    <v-row style="height: 100%; max-height: calc(400px)" class="flex-column">
      <v-col cols="12">
        <palette style="height: 100%; max-height: 400px" @change="change" />
      </v-col>
    </v-row>
    <v-row style="height: 100%; max-height: calc(400px)" class="flex-column">
      <v-col cols="12">
        <palette-view
          :propLines="lines"
          :propSync="true"
          style="height: 100%; max-height: 300px"
        />
      </v-col>
    </v-row>
    <v-row class="px-4" align-content="center">
      <v-col cols="8" sm="6"> <v-text-field v-model="title" /> </v-col>
      <v-col cols="4" sm="6" style="text-align: center;">
        <v-btn
          color="primary"
          :loading="loading"
          :disabled="!dataUrl || !title"
          @click="save"
        >
          保存
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ExStore } from 'vuex'
import { storage } from '@/plugins/firebase'
import gql from 'graphql-tag'

@Component({
  components: {
    Palette: () => import('@/components/Palette.vue'),
    PaletteView: () => import('@/components/PaletteView.vue')
  }
})
export default class Playground extends Vue {
  $store!: ExStore

  json = '[]'
  dataUrl = ''
  title = ''
  loading = false

  get lines() {
    return JSON.parse(this.json)
  }

  change(event: Event & { json: string; dataUrl: string }) {
    this.json = event.json
    this.dataUrl = event.dataUrl
  }

  async save() {
    this.loading = true
    try {
      const ref = storage.ref()
      const imageRef = ref.child(
        `draw-image/${new Date().toISOString()}-${this.title}.jpg`
      )
      await imageRef.putString(this.dataUrl, 'data_url')
      const imageUrl = await imageRef.getDownloadURL()

      await this.$apollo.mutate({
        mutation: gql`
          mutation POST_PICTURE($name: String!, $url: String!, $json: String!) {
            insert_draw_picture(
              objects: { name: $name, url: $url, json_data: $json }
            ) {
              returning {
                id
              }
            }
          }
        `,
        variables: {
          name: this.title,
          url: imageUrl,
          json: this.json
        }
      })
    } finally {
      this.loading = false
    }
  }
}
</script>
