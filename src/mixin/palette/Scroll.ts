import BasePaletteMixin from './BasePalette'
import { Component, Prop } from 'vue-property-decorator'
import { ExStore } from 'vuex'

@Component
export default class ScrollPaletteMixin extends BasePaletteMixin {
  $store!: ExStore

  @Prop({ default: false })
  scrollable!: boolean

  mounted() {
    if (!this.scrollable) {
      this.stage.content.addEventListener(
        'touchstart',
        (e) => {
          if (e.touches.length === 1 && e.cancelable) {
            e.preventDefault()
          }
        },
        {
          passive: false
        }
      )
    }
  }
}
