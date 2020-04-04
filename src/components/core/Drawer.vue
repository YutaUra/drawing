<template>
  <v-navigation-drawer app v-model="drawer" width="300">
    <v-container>
      <v-row justify="space-around">
        <v-col cols="9" class="title text-center">
          ナビゲーション
        </v-col>
        <v-col cols="3">
          <v-icon @click="$emit('input', false)">mdi-close</v-icon>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-group
          v-for="navList in navLists"
          :key="navList.name"
          :prepend-icon="navList.icon"
          no-action
          :append-icon="navList.lists ? undefined : ''"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ navList.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(list, i) in navList.lists" :key="i">
            <v-list-item-content>
              <v-list-item-title>
                <template v-if="list.to">
                  <router-link :to="list.to">{{ list.title }}</router-link>
                </template>
                <template v-else>
                  {{ list.title }}
                </template>
              </v-list-item-title>
              <template v-if="navList.name === '砂場' && list.title === '設定'">
                <brush-setting />
              </template>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item>
          <v-list-item-action class="text-center">
            <v-btn small @click="logout">ログアウト</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/plugins/firebase'

export default Vue.extend({
  name: 'Drawer',
  components: {
    BrushSetting: () => import('@/components/core/BrushSetting.vue')
  },
  props: {
    // drawer open or close
    value: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      navLists: [
        {
          name: '砂場',
          icon: 'mdi-brush',
          lists: [
            { title: 'お絵かき', to: { name: 'playground' } },
            { title: '過去の作品' },
            { title: '設定' }
          ]
        },
        {
          name: 'ユーザー設定',
          icon: 'mdi-account-circle',
          lists: [{ title: 'プロフィール編集' }]
        },
        {
          name: '友達',
          icon: 'mdi-account-heart',
          lists: [{ title: '一覧' }, { title: '探す' }]
        },
        {
          name: 'ピクトリンク！',
          icon: 'mdi-image-frame',
          lists: [
            { title: '部屋を作成', to: { name: 'CreateRoom' } },
            { title: '部屋に参加', to: { name: 'SearchRoom' } },
            { title: '参加している部屋', to: { name: 'MyRoom' } }
          ]
        }
      ]
    }
  },
  computed: {
    drawer: {
      get(): boolean {
        return this.value
      },
      set(v: boolean) {
        this.$emit('change', v)
      }
    }
  },
  methods: {
    async logout() {
      await auth.signOut()
      await this.$router.push({ name: 'home' })
    }
  }
})
</script>
