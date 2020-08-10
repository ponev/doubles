import React from 'react'

import logo from '../logo.png'

export const Navbar = ({gameStart, gameOver}) => {

  let statusGame = {
    text: '', cls: 'game-status'
  }

  if (gameStart && !gameOver) {
    statusGame.text = 'Игра началась!';
    statusGame.cls = 'game-status game-started'
  }
  if (gameOver) {
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
