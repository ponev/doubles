import {SET_LOADING} from '../types'

const handlers = {
  [SET_LOADING]: state => ({...state, loading: true}),
  DEFAULT: state => state
}

export const ResultReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}