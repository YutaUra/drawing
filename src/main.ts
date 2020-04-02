import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { apolloProvider, onLogin, onLogout } from '@/plugins/apollo'
import VueApollo from 'vue-apollo'
import { auth, db } from '@/plugins/firebase'
import VueKonva from 'vue-konva'

const HASURA_TOKEN_KEY = 'https://hasura.io/jwt/claims'

Vue.use(VueApollo)
Vue.use(VueKonva)

Vue.config.productionTip = false

let vue: Vue
// firebaseの初期化が終わったあとにVueを初期化するようにする
auth.onAuthStateChanged(async user => {
  if (user) {
    const token = await user.getIdToken(true)
    const idTokenResult = await user.getIdTokenResult()
    const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY]

    if (hasuraClaims) {
      await onLogin(token)
    } else {
      // Tokenのリフレッシュを検知するためにコールバックを設定する
      const userRef = db.collection('user_meta').doc(user.uid)
      userRef.onSnapshot(async () => {
        const token = await user.getIdToken(true)
        await onLogin(token)
      })
    }
  } else {
    await onLogout()
  }
  if (!vue) {
    new Vue({
      vuetify,
      apolloProvider,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
