<template>
  <v-container>
    <h1>カンバン</h1>
    <v-row>
      <v-col cols="12" sm="8">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="kanbanName" label="名前" />
          </v-col>
          <v-col cols="12" md="6">
            <v-textarea v-model="kanbanDiscription" label="説明" />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="2" align-self="end">
        <v-btn outlined @click="addKanban" :loading="loading">CREATE</v-btn>
      </v-col>
    </v-row>
    <div>
      <transition-group tag="div" name="kanban-list" class="kanban-list">
        <div
          v-for="kanban in kanbans"
          :key="kanban.id"
          class="kanban-list__item"
        >
          <kanban-top :kanban="kanban" />
        </div>
      </transition-group>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'
import { Kanban } from '@/generated/graphql'

export default Vue.extend({
  name: 'Kanban',
  components: {
    KanbanTop: () => import('@/components/kanban/Kanban.vue')
  },
  data() {
    return {
      kanbans: [] as Kanban[],
      kanbanName: 'snfvkf',
      kanbanDiscription: 'jsvf',
      loading: false
    }
  },
  methods: {
    async _addKanban() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation ADD_KANBAN($name: String!, $description: String!) {
            insert_kanban(objects: { name: $name, description: $description }) {
              returning {
                id
              }
            }
          }
        `,
        variables: {
          name: this.kanbanName,
          description: this.kanbanDiscription
        }
      })
    },
    async addKanban() {
      if (!this.kanbanName) return
      try {
        this.loading = true
        await this._addKanban()
        // this.kanbanName = ''
        // this.kanbanDiscription = ''
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    }
  },
  apollo: {
    $subscribe: {
      kanbans: {
        query: gql`
          subscription SUBSCRIPTION_KANBAN {
            kanbans: kanban(order_by: { created_at: desc }) {
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
        result(data: { data: { kanbans: Kanban[] } }) {
          this.kanbans = data.data.kanbans
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.kanban-list {
  $fade: 300px;
  position: relative;

  &__item {
    max-width: 100%;
    transform-style: preserve-3d;
  }

  &-enter {
    opacity: 0;
    transform: translateX(-$fade);
  }

  &-enter-active {
    transition: all 1s ease-out;
  }

  &-enter-to,
  &-leave {
    opacity: 1;
  }

  &-leave-active {
    position: absolute !important;
    transition: all 1s ease-in;
    width: 100%;
  }

  &-leave-to {
    opacity: 0;
    transform: translateX($fade);
  }

  &-move {
    transition: all 1s;
  }
}
</style>
