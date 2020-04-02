import 'vuex'
import * as Root from '@/store/types'
import * as Brush from '@/store/brush/types'

declare module 'vuex' {
  type RootState = Root.S & {
    brush: Brush.S
  }

  type RootGetters = Root.G & Brush.RG
  type RootMutations = Root.M & Brush.RM
  type RootActions = Root.A & Brush.RA

  // if you add other modules
  // RootState = Root.S & {
  //   [module name]: module.S
  // }
  // RootG,M,S = Root.G,M,A & module.RG,RM,RA
}
