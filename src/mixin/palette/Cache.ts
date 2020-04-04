import DataPaletteMixin from './Data'
import { Component, Prop } from 'vue-property-decorator'
import { ExStore } from 'vuex'
import { LineConfig } from 'konva/types/shapes/Line'
import { normalLinesToFitLines } from '@/util/palette/lines'

@Component
export default class CachePaletteMixin extends DataPaletteMixin {
  $store!: ExStore
  backLines: LineConfig[] = []

  @Prop({ default: false })
  cache!: boolean
  @Prop({ default: 'pallete-cache' })
  cacheKey!: string

  mounted() {
    if (this.cache) {
      this.lines = normalLinesToFitLines(
        JSON.parse(localStorage.getItem(this.cacheKey) || '[]'),
        this.size
      )
    }
  }

  created() {
    if (this.cache) {
      window.addEventListener('beforeunload', () => {
        localStorage.setItem(this.cacheKey, this.normalizedJson())
      })
      window.addEventListener('pagehide', () => {
        localStorage.setItem(this.cacheKey, this.normalizedJson())
      })
    }
  }
}
