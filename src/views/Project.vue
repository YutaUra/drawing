<template>
  <v-container>
    <template v-if="kanban">
      <router-link :to="{ name: 'kanban' }" class="kanban-link">
        カンバン
      </router-link>
      >
      <span>{{ kanban.name }}</span>
    </template>
    <template v-else>
      <router-link :to="{ name: 'kanban' }" class="kanban-link">
        カンバン
      </router-link>
      <v-container>
        <h1>カンバンが存在しません</h1>
      </v-container>
    </template>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Kanban } from '../generated/graphql'
import gql from 'graphql-tag'

export default Vue.extend({
  name: 'Project',
  data() {
    return {
      kanban: {} as Kanban
    }
  },
  apollo: {
    $subscribe: {
      kanban: {
        query: gql`
          subscription KANBAN($id: Int!) {
            kanban: kanban_by_pk(id: $id) {
              id
              name
              description
              created_at
              updated_at
              user {
                name
                photo_url
              }
            }
          }
        `,
        variables(): { id: number } {
          return {
            id: Number(this.$route.params.id)
          }
        },
        result(data: { data: { kanban: Kanban } }) {
          this.kanban = data.data.kanban
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.kanban-link {
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
