import {
  CHANGE_SIZE,
  GAME_START,
  SELECT_CARD,
  UPDATE_CARDS,
  PLAYER_TURN, GAME_OVER
} from '../types'

const handlers = {
  [UPDATE_CARDS]: (state, {cards}) => ({...state, cards}),
  [CHANGE_SIZE]: (state, {size}) => ({...state, size}),
  [GAME_START]: (state) => ({...state, isStarted: true, isOvered: false, attemptsCount: 0}),
  [GAME_OVER]: (state) => ({...state, isStarted: false, isOvered: true, hidedCount: 0}),
  [SELECT_CARD]: (state, {index}) => {
    let cards = [...state.cards]
    cards[index] = {...cards[index], flipped: true}

    return {
      ...state,
      cards,
      opened: [...state.opened, index]
    }
  },
  [PLAYER_TURN]: (state, {payload: {attemptsCount, hidedCount, flipped, hide}}) => {
    let cards = [...state.cards]
    cards[state.opened[0]] = {...cards[state.opened[0]], flipped, hide}
    cards[state.opened[1]] = {...cards[state.opened[1]], flipped, hide}

    return {
      ...state,
      cards,
      opened: [],
      attemptsCount,
      hidedCount
    }
  },
  DEFAULT: state => state
}

export const GameReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}