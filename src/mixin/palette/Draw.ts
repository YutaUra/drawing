import BackPaletteMixin from './Back'
import { Component, Prop } from 'vue-property-decorator'
import { LineConfig } from 'konva/types/shapes/Line'
import { ExStore } from 'vuex'

@Component
export default class DrawPaletteMixin extends BackPaletteMixin {
  $store!: ExStore
  isPaint = false
  lastLine: LineConfig = { points: [] }

  @Prop({ default: false })
  disable!: boolean

  get color() {
    return this.$store.state.brush.color
  }
  get lineWidth() {
    return this.$store.state.brush.lineWidth
  }
  get mode() {
    return this.$store.state.brush.mode
  }

  drawStart(e: TouchEvent | Event) {
    if (e instanceof TouchEvent && e.touches.length > 1) return
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
    this.backLines = []
  }

  draw(e: TouchEvent | Event) {
    if (e instanceof TouchEvent && e.touches.length !== 1) return
    if (this.disable) return
    if (!this.isPaint) return
    const pos = this.stage.getPointerPosition()
    if (!pos) return
    const newPoints = this.lastLine.points.concat([pos.x, pos.y])
    this.lastLine.points = newPoints
  }

  drawEnd() {
    if (this.disable) return
    this.isPaint = false
    this.afterDrawEnd()
  }

  afterDrawEnd() {
    //
  }
}
