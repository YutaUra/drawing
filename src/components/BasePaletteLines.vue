<template>
  <v-layer ref="layer">
    <v-line v-for="(conf, i) in lines" :key="i" :config="conf" />
  </v-layer>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { ExStore } from 'vuex'
import { LineConfig } from 'konva/types/shapes/Line'
import { Layer } from 'konva/types/Layer'

@Component
export default class BasePaletteLines extends Vue {
  $store!: ExStore

  @Prop({ default: [] })
  lines!: LineConfig[]

  get layer(): Layer {
    // eslint-disable-next-line
    return (this.$refs.layer as any).getNode()
  }

  @Watch('lines')
  lineChange() {
    this.layer.batchDraw()
  }
}
</script>
