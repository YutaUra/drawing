<template>
  <div
    ref="root"
    @mousedown.prevent
    @mousemove.prevent
    @touchstart.prevent
    @touchmove.prevent
    class="text-center align-stretch"
  >
    <v-stage
      :config="size"
      ref="stage"
      style="display: inline-block;"
      class="elevation-3"
    >
      <v-layer ref="layer">
        <v-line v-for="(conf, i) in calcLines" :key="i" :config="conf" />
      </v-layer>
    </v-stage>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ExStore } from 'vuex'
import { LineConfig } from 'konva/types/shapes/Line'

@Component
export default class PaletteView extends Vue {
  $store!: ExStore

  @Prop({ default: [] })
  lines!: LineConfig[]

  get calcLines() {
    return this.lines.map(conf => {
      return Object.assign({}, conf, {
        points: conf.points.map(v => (v * this.size.width) / 1000)
      })
    })
  }

  // eslint-disable-next-line
  size: { width: number; height: number } = {} as any

  get root(): HTMLDivElement {
    // eslint-disable-next-line
    return this.$refs.root as any
  }

  resize() {
    const m = Math.min(this.root.clientHeight, this.root.clientWidth) * 0.95
    this.size = {
      width: m,
      height: m
    }
  }

  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  }
}
</script>
