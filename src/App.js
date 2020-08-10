import React, { Component } from 'react'
import {Navbar} from './components/Navbar'
import {Cards} from './components/Cards'
import {Start} from './components/Start'
import {
  generateColorsCards,
  isFlippedCards,
  isGameOver,
  isCheckingSelectedCards,
  isDoubles
} from './utils'

class App extends Component {

  state = {
    gameStart: false,
    gameOver: false,
    size: 4,
    cards: [],
    opened: [],
    attemptsCount: 0,
    hidedCount: 0
  }

  componentDidMount() {
    this.updateCards(this.state.size)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hidedCount !== this.state.hidedCount) {
      if (isGameOver(this.state)) {
        this.setState({
          gameStart: false,
          gameOver: true,
          cards: generateColorsCards(this.state.size)
        })
      }
    }
    if (prevState.opened.length !== this.state.opened.length) {
      if (isCheckingSelectedCards(this.state)) {
        if (isDoubles(this.state)) {
          setTimeout(() => {
            this.setState(({cards, opened, attemptsCount}) => {
              cards[opened[0]].flipped = false
              cards[opened[1]].flipped = false

              return {
                cards,
                opened: [],
                attemptsCount: attemptsCount + 1
              }
            })
          }, 500)
        }
        else {
          setTimeout(() => {
            this.setState(({cards, opened, attemptsCount, hidedCount}) => {
              cards[opened[0]].hide = true
              cards[opened[1]].hide = true

              return {
                cards,
                opened: [],
                attemptsCount:  attemptsCount + 1,
                hidedCount: hidedCount + 1
              }
            })
          }, 500)
        }
      }
    }
  }

  updateCards = size => {
    const cards = generateColorsCards(size)

    this.setState({cards})
  }

  changeSizeHandler = size => {
    this.setState({
      size
    })
    this.updateCards(size)
  }

  startGameHandler = event => {
    event.preventDefault()
    this.setState({
      gameStart: true
    })
  }

  selectCardHandler = id => {
    const index = this.state.cards.findIndex((el) => el.id === id)

    if (isFlippedCards(this.state, index)) {
      this.setState(({cards, opened}) => {
        cards[index].flipped = true

        return {
          cards: [...cards],
          opened: [...opened, index]
        }
      })
    }
  }

  render() {
    const {size, gameOver, gameStart, attemptsCount, cards} = this.state
    const clsGameContainer = ['game-container']

    if (size > 4) {
      clsGameContainer.push(`size${size}`)
    }

    const introHtml = !gameOver
      ? <div>Выберите уровень сложности<br />и начните Игру!</div>
      : <div>Итог игры!<br/>Сделано попыток: <strong>{attemptsCount}</strong></div>

    return (
      <>
        <Navbar gameStart={gameStart} gameOver={gameOver}/>

        <div className={clsGameContainer.join(' ')}>
        {
          !gameStart &&
          <div className="intro">
            <div>
            { introHtml }
            <Start changeSize={this.changeSizeHandler} startGame={this.startGameHandler} />
            </div>
          </div>
        }
        <Cards cards={cards} selectCard={this.selectCardHandler} />
        </div>
      </>
    )
  }
}
export default App
