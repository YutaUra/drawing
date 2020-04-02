<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <palette @save="save" />
      </v-col>
      <v-col cols="12" v-if="current.imageUrl" class="image-preview">
        <v-img :src="current.imageUrl" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { storage } from '@/plugins/firebase'
import gql from 'graphql-tag'
// eslint-disable-next-line
import { Draw_Picture } from '@/generated/graphql'

export default Vue.extend({
  name: 'Canvas',
  components: {
    // Palette: () => import('@/components/Palette.vue')
    Palette: () => import('@/components/Palette.vue')
  },
  data() {
    return {
      current: {
        fileName: '',
        imageData: '',
        imageUrl: '',
        title: '',
        // eslint-disable-next-line
        data: {} as Draw_Picture
      }
    }
  },
  methods: {
    async save(value: string, title: string) {
      const update = !!this.current.fileName
      this.current.imageData = value
      this.current.title = title
      this.current.fileName =
        this.current.fileName ||
        `draw-image/${new Date().toISOString()}-${title}.jpg`

      const ref = storage.ref()
      const imageRef = ref.child(this.current.fileName)
      await imageRef.putString(value, 'data_url')
      const imageUrl = await imageRef.getDownloadURL()
      this.current.imageUrl = imageUrl

      let res
      if (update) {
        res = await this.$apollo.mutate({
          mutation: gql`
            mutation UPDATE_PICTURE($name: String!, $url: String!, $id: uuid!) {
              update_draw_picture(
                _set: { name: $name, url: $url }
                where: { id: { _eq: $id } }
              ) {
                returning {
                  id
                  name
                  url
                  user {
                    name
                    photo_url
                  }
                }
              }
            }
          `,
          variables: {
            name: title,
            url: imageUrl,
            id: this.current.data.id
          }
        })
        res = res.data.update_draw_picture.returning[0]
      } else {
        res = await this.$apollo.mutate({
          mutation: gql`
            mutation POST_PICTURE_OLD($name: String!, $url: String!) {
              insert_draw_picture(objects: { name: $name, url: $url }) {
                returning {
                  id
                  name
                  url
                  user {
                    name
                    photo_url
                  }
                }
              }
            }
          `,
          variables: {
            name: title,
            url: imageUrl
          }
        })
        res = res.data.insert_draw_picture.returning[0]
      }
      this.$set(this.current, 'data', res)
    },
    nextPicture() {
      // eslint-disable-next-line
      this.current = {} as any
    }
  }
})
</script>

<style lang="scss">
.image-preview {
  border: 1px black solid;
}
</style>
