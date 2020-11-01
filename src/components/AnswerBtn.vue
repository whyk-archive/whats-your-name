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
