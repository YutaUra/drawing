import BackPaletteMixin from './Back'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { ExStore } from 'vuex'

@Component
export default class ForwartPaletteMixin extends BackPaletteMixin {
  $store!: ExStore

  @Prop({ default: false })
  forward!: boolean
  @Watch('forward')
  forwardChange(v: boolean) {
    if (v) {
      const latest = this.backLines.pop()
      if (latest) {
        this.lines.push(latest)
      }
      this.$emit('forward', false)
    }
  }
}
