import SizePaletteMixin from './Size'
import { Component } from 'vue-property-decorator'
import { ExStore } from 'vuex'
import { LineConfig } from 'konva/types/shapes/Line'
import { fitLinesToNormalLines } from '@/util/palette/lines'

@Component
export default class BackPaletteMixin extends SizePaletteMixin {
  $store!: ExStore

  get normalizedLines(): LineConfig[] {
    return fitLinesToNormalLines(this.lines, this.size)
  }

  normalizedJson() {
    return JSON.stringify(this.normalizedLines)
  }

  normailzedDataUrl() {
    if (this.stage.size().height * this.stage.size().width !== 0) {
      return this.stage.toDataURL()
    }
    return ''
  }
}
