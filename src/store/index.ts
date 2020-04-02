import Vue from 'vue'
import { S, G, M, A } from './types'
import Vuex, { RootState, Getters, Mutations, Actions } from 'vuex'
import brush from '@/store/brush'

Vue.use(Vuex)

/* -------------------------------------------------------------------------- */

export const rootState = (): S => ({})

/* -------------------------------------------------------------------------- */

const getters: Getters<S, G> = {}

/* -------------------------------------------------------------------------- */

const mutations: Mutations<S, M> = {}

/* -------------------------------------------------------------------------- */

const actions: Actions<S, A, G, M> = {}

/* -------------------------------------------------------------------------- */

export default new Vuex.Store({
  state: rootState() as RootState,
  getters,
  mutations,
  actions,
  modules: {
    //   [module name]: module,
    //   ** maybe
    //   module,
    brush
  }
})
