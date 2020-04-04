<template>
  <base-palette
    :clear="clear"
    @clear="$emit('clear', $event)"
    :back="back"
    @back="$emit('back', $event)"
    :forward="forward"
    @forward="$emit('forward', $event)"
    :cache="cache"
    :cacheKey="cacheKey"
    @change="$emit('change', $event)"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ExStore } from 'vuex'

@Component({
  components: {
    BasePalette: () => import('@/components/BasePalette.vue')
  }
})
export default class Palette extends Vue {
  $store!: ExStore

  @Prop({ default: false })
  clear!: boolean
  @Prop({ default: false })
  back!: boolean
  @Prop({ default: false })
  forward!: boolean
  @Prop({ default: false })
  cache!: boolean
  @Prop({ default: 'pallete-cache' })
  cacheKey!: string
}
</script>
