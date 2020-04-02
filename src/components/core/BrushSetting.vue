<template>
  <v-container>
    <v-row align-content="center" align="center" justify="space-around">
      <v-col cols="12" align-self="end">
        <v-select
          :value="$store.state.brush.mode"
          :items="modes"
          item-text="label"
          item-value="value"
          @change="$store.commit('brush/setMode', { mode: $event })"
        >
          <template v-slot:selection="{ item }">
            <v-icon>mdi-{{ item.icon }}</v-icon>
            <v-spacer />
            {{ item.label }}
          </template>
        </v-select>
      </v-col>

      <v-col cols="12" align-self="center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" :color="$store.state.brush.color">
              いろ
            </v-btn>
          </template>
          <v-color-picker
            :value="$store.state.brush.color"
            @input="$store.commit('brush/setColor', { color: $event })"
            hide-canvas
            hide-inputs
            show-swatches
          />
        </v-menu>
      </v-col>

      <v-col cols="12" align-self="end">
        <v-slider
          :value="$store.state.brush.lineWidth"
          @change="
            $store.commit('brush/setLineWidth', {
              lineWidth: $event
            })
          "
          :thumb-size="20"
          thumb-label="always"
          prepend-icon="mdi-format-paint"
          :min="1"
          :max="20"
        ></v-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ExStore } from 'vuex'

@Component
export default class BrushSetting extends Vue {
  $store!: ExStore

  modes = [
    {
      value: 'source-over',
      label: 'ぺん',
      icon: 'fountain-pen-tip'
    },
    {
      value: 'destination-out',
      label: '消しゴム',
      icon: 'eraser'
    }
  ]

  select(event: Event) {
    console.log(event)
  }
}
</script>
