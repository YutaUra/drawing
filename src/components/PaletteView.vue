<template>
  <base-palette
    :cache="false"
    :disable="true"
    :scrollable="true"
    :sizeRatio="sizeRatio"
    :propLines="propLines"
    :propSync="propSync"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { ExStore } from 'vuex'
import { LineConfig } from 'konva/types/shapes/Line'

@Component({
  components: {
    BasePalette: () => import('@/components/BasePalette.vue')
  }
})
export default class PaletteView extends Vue {
  $store!: ExStore

  @Prop({ default: 0.95 })
  sizeRatio!: number
  @Prop({ default: () => [] })
  propLines!: LineConfig[]
  @Prop({ default: false })
  propSync!: boolean

  @Watch('lines')
  lineChange() {
    console.log('aaa1')
  }
}
</script>
