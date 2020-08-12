import React, {useContext} from 'react'
import {GameContext} from '../context/game/gameContext'

export const Start = () => {
  const {
    size,
    levels,
    changeSize,
    startGame
  } = useContext(GameContext)

  const changeSizeHandler = event => {
    changeSize(+event.target.value)
  }
  const startGameHandler = event => {
    event.preventDefault()
    startGame()
  }

  return (
    <form
      className="start-form"
      onSubmit={startGameHandler}
    >
      <select
        className="select-level"
        onChange={changeSizeHandler}
        value={size}
      >
        {
          levels.map(option => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.title}
            </option>
          ))
        }
      </select>
      <button className="btn">Начать игру</button>
    </form>
  )
}
