import type { InjectionKey } from 'vue'
import type { StateStore } from './provider'

export const StateKey: InjectionKey<StateStore> = Symbol('StateStore')
