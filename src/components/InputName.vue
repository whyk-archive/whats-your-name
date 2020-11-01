<template>
  <input v-model="state.newname" type="text" placeholder="Toika Asomaka" />
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

<style lang="scss" scoped>
input {
  display: block;
  font-size: 1.8rem;
}
</style>
