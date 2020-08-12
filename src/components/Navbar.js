import React, {useContext} from 'react'
import {GameContext} from '../context/game/gameContext'
import logo from '../logo.png'

export const Navbar = () => {
  const {isStarted, isOvered} = useContext(GameContext)

  let statusGame = {
    text: '', cls: 'game-status'
  }

  if (isStarted && !isOvered) {
    statusGame.text = 'Игра началась!';
    statusGame.cls = 'game-status game-started'
  }
  if (isOvered) {
    statusGame.text = 'Игра окончена!';
    statusGame.cls = 'game-status game-over'
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Doubles"/>
        Doubles
      </div>
      <div className={statusGame.cls}>
        {statusGame.text}
      </div>
    </nav>
  )
}
