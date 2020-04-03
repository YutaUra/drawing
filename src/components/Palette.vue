<template>
  <div ref="root" class="text-center">
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
  @Watch('clear')
  clearChange(v: boolean) {
    if (v) this.lines = []
  }

  @Prop({ default: false })
  back!: boolean
  @Watch('back')
  backChange(v: boolean) {
    if (v) {
      const r = this.lines.pop()
      if (r) this.backed.push(r)
    }
  }

  @Prop({ default: false })
  forward!: boolean
  @Watch('forward')
  forwardChange(v: boolean) {
    if (v) {
      const r = this.backed.pop()
      if (r) this.lines.push(r)
    }
  }

  @Prop({ default: false })
  disable!: boolean

  isPaint = false
  // eslint-disable-next-line
  lastLine: LineConfig = {} as any
  lines: LineConfig[] = []
  backed: LineConfig[] = []
  // eslint-disable-next-line
  size: { width: number; height: number } = {} as any
  updateCount = 0

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

  async prev(e: TouchEvent) {
    if (e.touches.length === 1 && e.cancelable) {
      e.preventDefault()
    }
  }

  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)
    this.stage.content.addEventListener('touchstart', e => this.prev(e), {
      passive: false
    })
    // this.stage.content.addEventListener('touchmove', e => this.prev(e), {
    //   passive: false
    // })
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  }

  drawStart(e: TouchEvent | Event) {
    if (this.isTouchEvent(e) && e.touches.length > 1) return
    if (this.disable) return
    this.isPaint = true
    this.updateCount = 0
    const pos = this.stage.getPointerPosition()
    if (!pos) return

    this.lastLine = {
      stroke: this.color,
      strokeWidth: this.lineWidth,
      globalCompositeOperation: this.mode,
      points: [pos.x, pos.y]
    }
    this.lines.push(this.lastLine)
    this.backed = []
  }

  drawEnd() {
    if (this.disable) return
    this.isPaint = false
    this.$emit('change', { json: this.toJSON(), dataUrl: this.toDataUrl() })
  }

  get normalizedLines(): LineConfig[] {
    return this.lines.map(conf => {
      return Object.assign({}, conf, {
        points: conf.points.map(v => (v * 1000) / this.size.width)
      })
    })
  }

  isTouchEvent(e: Event | TouchEvent): e is TouchEvent {
    return e instanceof TouchEvent
  }

  draw(e: TouchEvent | Event) {
    if (this.isTouchEvent(e) && e.touches.length !== 1) return
    if (this.disable) return
    if (!this.isPaint) return

    const pos = this.stage.getPointerPosition()
    if (!pos) return
    const newPoints = this.lastLine.points.concat([pos.x, pos.y])
    this.lastLine.points = newPoints
    this.layer.batchDraw()
    if (this.updateCount % 30 === 0) {
      console.log('update')
      this.$emit('change', { json: this.toJSON(), dataUrl: this.toDataUrl() })
    }
    this.updateCount++
  }

  @Watch('lines')
  linesChange() {
    this.$emit('change', { json: this.toJSON(), dataUrl: this.toDataUrl() })
  }

  toJSON() {
    return JSON.stringify(this.normalizedLines)
  }

  toDataUrl() {
    return this.stage.toDataURL()
  }
}
</script>
