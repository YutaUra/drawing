import ClearPaletteMixin from './Clear'
import DrawPaletteMixin from './Draw'
import ForwartPaletteMixin from './Forward'
import ScrollPaletteMixin from './Scroll'
import { Component, Mixins } from 'vue-property-decorator'
import { ExStore } from 'vuex'

@Component
export default class EditPaletteMixin extends Mixins(
  DrawPaletteMixin,
  ForwartPaletteMixin,
  ClearPaletteMixin,
  ScrollPaletteMixin
) {
  $store!: ExStore
}
