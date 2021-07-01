import { createContext } from 'react'
import { types } from './types'

export const userContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true
      }

    case types.logout:
      return {
        logged: false
      }

    default:
      return state
  }
}
