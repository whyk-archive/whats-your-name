<template>
  <button @click="reset">Continue</button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { StateKey } from '../store/useState/model'
import { StateStore } from '../store/useState/provider'

export default defineComponent({
  setup() {
    const { updateName, resetNewname, updateAnswered } = inject(StateKey) as StateStore

    const reset = () => {
      updateName('whyk')
      resetNewname()
      updateAnswered()
    }

    return {
      reset,
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
