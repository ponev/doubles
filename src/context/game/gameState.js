import React, {useReducer} from 'react'
import {GameContext} from './gameContext'
import {GameReducer} from './gameReducer'
import {
  CHANGE_SIZE,
  UPDATE_CARDS,
  GAME_START,
  SELECT_CARD,
  PLAYER_TURN,
  GAME_OVER
} from '../types'
import {
  generateCards,
  isFlippedCards,
  isCheckingSelectedCards,
  isDoubles,
  isGameOver
} from '../utils'

export const GameState = ({children}) => {
  const initialState = {
    isStarted: false,
    isOvered: false,
    size: 4,
    attemptsCount: 0,
    hidedCount: 0,
    cards: [],
    opened: [],
    levels: [
      {title: 'Новичок', value: 4, level: 'easy'},
      {title: 'Уверенный', value: 6, level: 'normal'},
      {title: 'Эксперт', value: 8, level: 'expert'}
    ]
  }
  const [state, dispatch] = useReducer(GameReducer, initialState)

  const updateCards = size => {
    const cards = generateCards(size)
    dispatch({
      type: UPDATE_CARDS,
      cards
    })
  }

  const changeSize = size => {
    dispatch({
      type: CHANGE_SIZE,
      size
    })
    updateCards(size)
  }

  const startGame = () => dispatch({type: GAME_START})

  const overGame = () => dispatch({type: GAME_OVER})

  const selectCard = id => {
    const {cards} = state
    const index = cards.findIndex((el) => el.id === id)
    if (isFlippedCards(state, index)) {
      dispatch({
        type: SELECT_CARD,
        index
      })
    }
  }

  const playerTurn = () => {
    const {attemptsCount, hidedCount} = state

    if (isGameOver(state)) {
      overGame()
      updateCards(size)
    }
    if (isCheckingSelectedCards(state)) {
      if (isDoubles(state)) {
        setTimeout(() => {
          dispatch({
            type: PLAYER_TURN,
            payload: {
              attemptsCount: attemptsCount + 1,
              hidedCount,
              flipped: false,
              hide: false
            }
          })
        }, 500)
      }
      else {
        setTimeout(() => {
          dispatch({
            type: PLAYER_TURN,
            payload: {
              attemptsCount: attemptsCount + 1,
              hidedCount: hidedCount + 1,
              flipped: false,
              hide: true
            }
          })
        }, 500)
      }
    }
  }

  const {
    isStarted,
    isOvered,
    size,
    cards,
    levels,
    opened,
    attemptsCount,
    hidedCount
  } = state

  return (
    <GameContext.Provider value={{
      playerTurn,
      selectCard,
      startGame,
      changeSize,
      updateCards,
      isStarted,
      isOvered,
      size,
      opened,
      cards,
      levels,
      attemptsCount,
      hidedCount
    }}>
      {children}
    </GameContext.Provider>
  )
};