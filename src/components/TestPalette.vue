<template>
  <div ref="root" class="text-center">
    <v-stage
      :config="{ width: 300, height: 300 }"
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
      <!-- <v-stage
      :config="{ width: 300, height: 300 }"
      ref="stage"
      style="display: inline-block;"
      class="elevation-3"
    > -->
      <lines :lines="lines" :size="300" />
    </v-stage>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import DrawPaletteMixin from '@/mixin/palette/Draw'
// import ScrollPaletteMixin from '@/mixin/palette/Scroll'
import ForwardPaletteMixin from '@/mixin/palette/Forward'
import { ExStore } from 'vuex'

@Component({
  components: {
    Lines: () => import('@/components/BasePaletteLines.vue')
  }
})
export default class Test extends Mixins(
  DrawPaletteMixin,
  ForwardPaletteMixin
) {
  $store!: ExStore
}
</script>
