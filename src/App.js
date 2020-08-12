import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {GameState} from './context/game/gameState'
import {Navbar} from './components/Navbar'
import {Game} from './pages/Game'
import {Results} from './pages/Results'
import {ResultState} from './context/result/resultState'

function App () {
  return (
    <GameState>
      <ResultState>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Game}  />
            <Route path="/results/:level" component={Results} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </ResultState>
    </GameState>
  )
}
export default App
