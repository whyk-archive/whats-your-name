<template>
  <user-image />
  <h1>Whats Your Name?</h1>
  <switching-view>
    <template #question>
      <input-name />
      <answer-btn />
    </template>
    <template #answer>
      <p>Hahaha!! Very suitable!!!!</p>
      <reset-btn />
    </template>
  </switching-view>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import SwitchingView from './components/SwichingView.vue'
import UserImage from './components/UserImage.vue'
import InputName from './components/InputName.vue'
import AnswerBtn from './components/AnswerBtn.vue'
import ResetBtn from './components/ResetBtn.vue'
import { useState, StateKey } from './store/useState/provider'

export default defineComponent({
  components: {
    SwitchingView,
    UserImage,
    InputName,
    AnswerBtn,
    ResetBtn,
  },
  setup() {
    provide(StateKey, useState())
    return {}
  },
})
</script>

<style lang="scss">
html {
  font-size: 62.5%;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 980px;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="scss" scoped>
img {
  width: 20%;
}
h1 {
  font-size: 4rem;
}
p {
  font-size: 2.2rem;
}
</style>
