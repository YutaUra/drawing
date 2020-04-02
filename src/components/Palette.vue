<template>
  <div
    ref="root"
    @mousedown.prevent
    @mousemove.prevent
    @touchstart.prevent
    @touchmove.prevent
    class="text-center"
  >
    <v-stage
      :config="size"
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
      <v-layer ref="layer">
        <v-line v-for="(conf, i) in lines" :key="i" :config="conf" />
      </v-layer>
    </v-stage>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { ExStore } from 'vuex'
import { Stage } from 'konva/types/Stage'
import { LineConfig } from 'konva/types/shapes/Line'
import { Layer } from 'konva/types/Layer'

@Component
export default class Palette extends Vue {
  $store!: ExStore

  @Prop({ default: false })
  clear!: boolean

  @Prop({ default: false })
  disable!: boolean

  isPaint = false
  // eslint-disable-next-line
  lastLine: LineConfig = {} as any
  lines: LineConfig[] = []
  // eslint-disable-next-line
  size: { width: number; height: number } = {} as any

  get mode() {
    return this.$store.state.brush.mode
  }
  get color() {
    return this.$store.state.brush.color
  }
  get lineWidth() {
    return this.$store.state.brush.lineWidth
  }

  get stage(): Stage {
    // eslint-disable-next-line
    return (this.$refs.stage as any).getNode()
  }

  get layer(): Layer {
    // eslint-disable-next-line
    return (this.$refs.layer as any).getNode()
  }

  get root(): HTMLDivElement {
    // eslint-disable-next-line
    return this.$refs.root as any
  }

  resize() {
    const m = Math.min(this.root.clientHeight, this.root.clientWidth)
    this.size = {
      width: m * 0.95,
      height: m * 0.95
    }
  }

  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  }

  drawStart() {
    if (this.disable) return
    this.isPaint = true
    const pos = this.stage.getPointerPosition()
    if (!pos) return

    this.lastLine = {
      stroke: this.color,
      strokeWidth: this.lineWidth,
      globalCompositeOperation: this.mode,
      points: [pos.x, pos.y]
    }
    this.lines.push(this.lastLine)
  }

  drawEnd() {
    if (this.disable) return
    this.isPaint = false
    this.$emit('change', { json: this.toJSON(), dataUrl: this.toDataUrl() })
  }

  draw() {
    if (this.disable) return
    if (!this.isPaint) return

    const pos = this.stage.getPointerPosition()
    if (!pos) return
    const newPoints = this.lastLine.points.concat([pos.x, pos.y])
    this.lastLine.points = newPoints
    this.layer.batchDraw()
  }

  @Watch('lines')
  linesChange() {
    this.$emit('change', { json: this.toJSON(), dataUrl: this.toDataUrl() })
  }

  @Watch('clear')
  clearChange(newValue: boolean) {
    if (newValue) {
      this.lines = []
    }
  }

  toJSON() {
    return JSON.stringify(this.lines)
  }

  toDataUrl() {
    return this.stage.toDataURL()
  }
}
</script>
