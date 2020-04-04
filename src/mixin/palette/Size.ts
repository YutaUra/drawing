import BasePaletteMixin from './BasePalette'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { ExStore } from 'vuex'
import { LineConfig } from 'konva/types/shapes/Line'
import { normalLinesToFitLines, changeLinesRatio } from '@/util/palette/lines'

@Component
export default class BackPaletteMixin extends BasePaletteMixin {
  $store!: ExStore
  size = 0

  @Prop({ default: 0.95 })
  sizeRatio!: number

  @Watch('sizeRatio')
  sizeRatioChange() {
    this.resize()
  }

  @Prop({ default: () => [] })
  propLines!: LineConfig[]

  @Prop({ default: false })
  propSync!: boolean

  @Watch('propLines')
  propLineChange() {
    if (!this.propSync) return
    this.lines = normalLinesToFitLines(this.propLines, this.size)
  }

  get minRootSize() {
    const root = this.$refs.root as HTMLDivElement
    return Math.min(root.clientHeight, root.clientWidth)
  }

  resize() {
    const beforeSize = this.size
    this.size = this.minRootSize * this.sizeRatio
    this.lines = changeLinesRatio(this.lines, beforeSize, this.size)
  }

  mounted() {
    this.size = this.minRootSize * this.sizeRatio
    this.lines = normalLinesToFitLines(this.propLines, this.size)
    window.addEventListener('resize', this.resize)
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  }
}
