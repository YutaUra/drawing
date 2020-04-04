<template>
  <v-app>
    <drawer v-model="drawer" />
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title @click="$router.push({ name: 'home' })">
        ピクトリンク
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="isLogin">
        <span v-if="isLogin">{{ user.displayName || user.email }}さん</span>
        <!-- <v-btn outlined v-if="isLogin" @click="logout">Logout</v-btn> -->
      </template>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/plugins/firebase'

export default Vue.extend({
  name: 'App',
  components: {
    Drawer: () => import('@/components/core/Drawer.vue')
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    async logout() {
      await auth.signOut()
      await this.$router.push({ name: 'home' })
    }
  },
  computed: {
    isLogin() {
      return !!auth.currentUser
    },
    user() {
      return auth.currentUser as firebase.User
    }
  }
})
</script>

<style lang="scss" scoped>
html,
body {
  overflow: hidden;
}
</style>
