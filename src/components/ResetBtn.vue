<template>
  <button @click="resetState">Continue</button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import type { StateStore } from '../store/useState/model'
import { StateKey } from '../store/useState/provider'

export default defineComponent({
  setup() {
    const { resetState } = inject(StateKey) as StateStore

    return {
      resetState,
    }
  },
})
</script>

<style lang="scss" scoped>
button {
  display: inline-block;
  padding: 10px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  background-color: #333;
  border: none;
  border-radius: 6px;
  outline: none;
  appearance: none;
}
</style>
