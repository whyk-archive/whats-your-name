import { reactive, InjectionKey } from 'vue'
import { StateStore } from './model'

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
  const updateAnswered = () => {
    state.answered = !state.answered
  }
  const updateClicked = () => {
    state.clicked = true
  }
  const resetState = () => {
    state.name = 'whyk'
    state.newname = ''
    state.answered = false
    state.clicked = false
  }

  return {
    state,
    updateName,
    updateAnswered,
    updateClicked,
    resetState,
  }
}

export const StateKey: InjectionKey<StateStore> = Symbol('StateStore')
