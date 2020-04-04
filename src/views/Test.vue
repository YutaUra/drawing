<template>
  <div>
    <v-btn @click="clear = true">削除</v-btn>
    <v-btn @click="back = true">戻す</v-btn>
    <v-btn @click="forward = true">進む</v-btn>
    <palette
      :cache="true"
      :clear="clear"
      @clear="clear = $event"
      :back="back"
      @back="back = $event"
      :forward="forward"
      @forward="forward = $event"
      @change="
        json = $event.json
        dataUrl = $event.dataUrl
      "
    />
    <palette-view :propLines="parsedJson" :propSync="true" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { ExStore } from 'vuex'

@Component({
  components: {
    Palette: () => import('@/components/Palette.vue'),
    PaletteView: () => import('@/components/PaletteView.vue')
  }
})
export default class Test extends Vue {
  $store!: ExStore

  clear = false
  back = false
  forward = false

  json = '[]'
  dataUrl = ''
  parsedJson = []

  @Watch('json')
  jsonChange() {
    this.$set(this, 'parsedJson', JSON.parse(this.json))
  }
}
</script>
