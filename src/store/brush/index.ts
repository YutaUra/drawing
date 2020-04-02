import { S, G, M, A } from './types'
import { Getters, Mutations, Actions } from 'vuex'

/* -------------------------------------------------------------------------- */

const state = (): S => ({
  color: '#666666',
  lineWidth: 5,
  mode: 'source-over'
})

/* -------------------------------------------------------------------------- */

const getters: Getters<S, G> = {}

/* -------------------------------------------------------------------------- */

const mutations: Mutations<S, M> = {
  setColor: (state, { color }) => (state.color = color),
  setLineWidth: (state, { lineWidth }) => (state.lineWidth = lineWidth),
  setMode: (state, { mode }) => (state.mode = mode)
}

/* -------------------------------------------------------------------------- */

const actions: Actions<S, A, G, M> = {}

/* -------------------------------------------------------------------------- */

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
