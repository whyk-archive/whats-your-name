import { reactive } from 'vue'

export const useState = () => {
  const state = reactive({
    name: 'whyk',
    newname: '',
    answered: false,
  })

  const updateName = (newname: string) => {
    state.name = newname
  }
  const resetNewname = () => {
    state.newname = ''
  }
  const updateAnswered = () => {
    state.answered = !state.answered
  }

  return {
    state,
    updateName,
    resetNewname,
    updateAnswered,
  }
}

export type StateStore = ReturnType<typeof useState>
