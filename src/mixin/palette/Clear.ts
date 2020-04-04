import BackPaletteMixin from './Back'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { ExStore } from 'vuex'

@Component
export default class ClearPaletteMixin extends BackPaletteMixin {
  $store!: ExStore

  @Prop({ default: false })
  clear!: boolean
  @Watch('clear')
  clearChange(v: boolean) {
    if (v) {
      this.lines = []
      this.backLines = []
      this.$emit('clear', false)
    }
  }
}
