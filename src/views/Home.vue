<template>
  <div class="home">
    <v-card class="mb-5">
      <v-card-text>
        <v-textarea outlined label="Memo" single-line v-model="content" />
        <v-btn block @click="addMemo" color="primary">add Memo</v-btn>
      </v-card-text>
    </v-card>
    <template v-if="memos && memos.length > 0">
      <v-card v-for="memo in memos" :key="memo.id" class="mb-1">
        <v-card-text>
          {{ memo.content }}
        </v-card-text>
        <v-card-subtitle>{{ memo.created_at }}</v-card-subtitle>
        <v-card-actions>
          <v-spacer />
          <v-icon @click="deleteMemo(memo.id)">mdi-delete</v-icon>
        </v-card-actions>
      </v-card>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Memo = {
  id: number
  content: string
  created_at: string
}

type Data = {
  content: string
  memos: Memo[]
}

export default Vue.extend({
  name: 'home',
  data(): Data {
    return {
      content: '',
      memos: []
    }
  },
  methods: {}
})
</script>
