import React from 'react'

export const Start = () => {

  const selectSize = [
    {value: 4, title: '4 на 4 клетки'},
    {value: 6, title: '6 на 6 клеток'},
    {value: 8, title: '8 на 8 клеток'},
    {value: 12, title: '12 на 12 клеток'}
  ].map(option => <option key={option.value} value={option.value}>{option.title}</option>)

  return (
    // <div className="game-started">Игра началась!</div>
    // <div className="game-over">Игра окончена!</div>
    <form className="start-form">
      <select
        className="select-size"
      >
        {selectSize}
      </select>
      <button className="btn">Начать игру</button>
    </form>
  )
}
