import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {GameContext} from '../context/game/gameContext'
import {Start} from '../components/Start'
import {Cards} from '../components/Cards'

export const Game = () => {
  const {
    attemptsCount,
    isStarted,
    isOvered,
    size
  } = useContext(GameContext)

  const clsGameContainer = ['game-container']

  if (size > 4) {
    clsGameContainer.push(`size${size}`)
  }

  const introHtml = !isOvered
    ? <div>Выберите уровень сложности<br />и начните Игру!</div>
    : <div>Итог игры!<br/>Сделано попыток: <strong>{attemptsCount}</strong></div>

  return (
    <>
      <div className={clsGameContainer.join(' ')}>
      {
        !isStarted &&
        <div className="intro">
          <div>
            { introHtml }
            <Start />
          </div>
        </div>
      }
      <Cards />
      </div>
      {
        (!isStarted || isOvered) && <nav className="nav">
          <NavLink to={"/results/easy"}>Таблица результатов</NavLink>
        </nav>
      }
    </>
  )
}
