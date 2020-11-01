<template>
  <img :src="`https://joeschmoe.io/api/v1/${state.name}`" :alt="`${state.name}'s image`">
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { StateKey } from '../store/useState/model'
import { StateStore } from '../store/useState/provider'

export default defineComponent({
  setup() {
    const { state } = inject(StateKey) as StateStore

    return {
      state
    }
  }
})
</script>