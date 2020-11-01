<template>
  <button @click="updateNewname">Final Anser?</button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { StateKey } from '../store/useState/model'
import { StateStore } from '../store/useState/provider'

export default defineComponent({
  setup() {
    const { state, updateName, updateAnswered } = inject(StateKey) as StateStore

    const updateNewname = () => {
      updateName(state.newname)
      updateAnswered()
    }

    return {
      updateNewname,
    }
  },
})
</script>

<style lang="scss" scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  display: inline-block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  font-size: 2rem;
  background-color: #333;
  color: #fff;
  border-radius: 6px;
  padding: 10px;
}
</style>
