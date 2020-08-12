import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {GameContext} from '../context/game/gameContext'

export const Results = ({match}) => {
  const {levels} = useContext(GameContext)
  // const levelTab = match.params.level

  return (
    <>
      <div className="results-page">
        <div className="title-page">
          <NavLink to={"/"}>Играть</NavLink>
          Результаты
        </div>
        <ul className="tabs-results">
          {levels.map(({title, level}) => (
            <li key={level}>
              <NavLink to={`/results/${level}`}>{title}</NavLink>
            </li>
          ))}
        </ul>
        <p style={{padding: '30px', textAlign: 'center'}}>На данный момент нет записей. </p>
      </div>
    </>
  )
}