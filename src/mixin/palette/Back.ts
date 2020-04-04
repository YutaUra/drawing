import BasePaletteMixin from './BasePalette'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { ExStore } from 'vuex'
import { LineConfig } from 'konva/types/shapes/Line'

@Component
export default class BackPaletteMixin extends BasePaletteMixin {
  $store!: ExStore
  backLines: LineConfig[] = []

  @Prop({ default: false })
  back!: boolean
  @Watch('back')
  backChange(v: boolean) {
    if (v && this.backLines.length <= 10) {
      const latest = this.lines.pop()
      if (latest) {
        this.backLines.push(latest)
      }
    }
    this.$emit('back', false)
  }
}
