<template>
  <v-card class="ma-3" :loading="loading">
    <v-card-title>
      <router-link
        :to="{ name: 'project', params: { id: kanban.id } }"
        class="kanban-title"
      >
        {{ kanban.name }}
      </router-link>
    </v-card-title>
    <v-card-subtitle>{{ kanban.description }}</v-card-subtitle>
    <v-card-text>{{ kanban.user.name }}</v-card-text>
    <v-card-actions>
      <v-icon @click="removeKanban(kanban.id)">mdi-delete</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Kanban } from '@/generated/graphql'
import gql from 'graphql-tag'

export default Vue.extend({
  props: {
    kanban: {
      required: true,
      type: Object as Vue.PropType<Kanban>
    }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async removeKanban(id: number) {
      this.loading = true
      await this.$apollo.mutate({
        mutation: gql`
          mutation REMOVE_KANBAN($id: Int!) {
            delete_kanban(where: { id: { _eq: $id } }) {
              returning {
                id
              }
            }
          }
        `,
        variables: {
          id
        }
      })
      this.loading = false
    }
  }
})
</script>

<style lang="scss" scoped>
.kanban-title {
  color: black;
}
</style>
