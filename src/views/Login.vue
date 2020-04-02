<template>
  <div class="about">
    <h2 class="text-center">Please login.</h2>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/plugins/firebase'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { Route, NavigationGuard } from 'vue-router'

type Next = Parameters<NavigationGuard>[2]

export default Vue.extend({
  name: 'login',
  beforeRouteEnter(to: Route, from: Route, next: Next) {
    if (auth.currentUser) {
      console.log('user!')
      next('/')
    } else {
      next(() => {
        const uiConfig: firebaseui.auth.Config = {
          signInSuccessUrl: '/',
          signInFlow: 'popup',
          signInOptions: [
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
          ]
        }
        const ui =
          firebaseui.auth.AuthUI.getInstance() ||
          new firebaseui.auth.AuthUI(auth)
        ui.start('#firebaseui-auth-container', uiConfig)
      })
    }
  }
})
</script>
