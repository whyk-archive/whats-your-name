<template>
  <div v-if="!state.answered">
    <slot name="question" />
  </div>
  <div v-else>
    <slot name="answer" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { StateKey } from '../store/useState/model'
import { StateStore } from '../store/useState/provider'

export default defineComponent({
  setup() {
    const { state } = inject(StateKey) as StateStore

    return {
      state,
    }
  },
})
</script>
