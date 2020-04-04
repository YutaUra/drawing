<template>
  <div ref="root" class="content text-center">
    <v-stage
      :config="{ width: size, height: size }"
      ref="stage"
      @mousedown="drawStart"
      @mouseup="drawEnd"
      @mousemove="draw"
      @touchstart="drawStart"
      @touchend="drawEnd"
      @touchmove="draw"
      style="display: inline-block;"
      class="elevation-3"
    >
      <lines :lines="lines" :size="size" />
    </v-stage>
  </div>
</template>

<script lang="ts">
import EditPaletteMixin from '@/mixin/palette/Edit'
import CachePaletteMixin from '@/mixin/palette/Cache'
import { Component, Mixins, Watch } from 'vue-property-decorator'
import { ExStore } from 'vuex'

@Component({
  components: {
    Lines: () => import('@/components/BasePaletteLines.vue')
  }
})
export default class BasePalette extends Mixins(
  EditPaletteMixin,
  CachePaletteMixin
) {
  $store!: ExStore
  updateCount = 0

  @Watch('normalizedLines')
  normalizedLinesChange() {
    if (this.updateCount < 10 || this.updateCount % 50 === 0) {
      this.$emit('change', {
        json: this.normalizedJson(),
        dataUrl: this.normailzedDataUrl()
      })
    }
    this.updateCount++
  }

  afterDrawEnd() {
    this.updateCount = 0
    this.$emit('change', {
      json: this.normalizedJson(),
      dataUrl: this.normailzedDataUrl()
    })
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
  width: 100vmin;
  height: 100vmin;
  max-width: 100%;
  max-height: 100%;
}
</style>
