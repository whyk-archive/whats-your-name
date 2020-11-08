import { reactive } from 'vue'

export const useState = () => {
  const state = reactive({
    name: 'whyk',
    newname: '',
    answered: false,
    clicked: false,
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
  const updateClicked = () => {
    state.clicked = true
  }

  return {
    state,
    updateName,
    resetNewname,
    updateAnswered,
    updateClicked,
  }
}

export type StateStore = ReturnType<typeof useState>
