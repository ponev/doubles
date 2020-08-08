import React from 'react'
import {Navbar} from './components/Navbar'

import {Cards} from './components/Cards'

function App() {
  return (
    <>
      <Navbar />
      <div className="game-container ">
        <div className="intro">Выберите размер поля<br />и начните Игру!</div>
        {/*<div className="intro">*/}
        {/*  <div>*/}
        {/*    Итог игры!<br/>Сделано попыток: <strong>55</strong><br />*/}
        {/*    <button className="btn">Начать заново!</button>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <Cards />
      </div>
    </>
  )
}

export default App
