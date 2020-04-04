import { Vue, Component } from 'vue-property-decorator'
import { ExStore } from 'vuex'
import { Stage } from 'konva/types/Stage'
import { LineConfig } from 'konva/types/shapes/Line'

@Component
export default class BasePaletteMixin extends Vue {
  $store!: ExStore
  get stage(): Stage {
    // eslint-disable-next-line
    return (this.$refs.stage as any).getNode()
  }

  lines: LineConfig[] = []
}
