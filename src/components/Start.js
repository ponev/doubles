import React from 'react'

export const Start = ({changeSize, startGame}) => {

  const levels = [
    {value: 4, title: 'Новичок'},
    {value: 6, title: 'Уверенный'},
    {value: 8, title: 'Эксперт'}
  ]

  return (
    <form
      className="start-form"
      onSubmit={e => startGame(e)}
    >
      <select
        className="select-level"
        onChange={e => changeSize(+e.target.value)}
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
