import React, {useContext, useEffect} from 'react'
import {GameContext} from '../context/game/gameContext'

export const Cards = () => {
  const {
    size,
    cards,
    opened,
    updateCards,
    selectCard,
    playerTurn
  } = useContext(GameContext)

  useEffect(() => {
    updateCards(size)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    playerTurn()
    // eslint-disable-next-line
  }, [opened.length])

  return (
    cards.map((card) => {
      const cls = ['card']

      if (card.flipped) {
        cls.push('flipped')
      }
      if (card.hide) {
        cls.push('hide')
      }

      return (
        <div
          className={cls.join(' ')}
          key={card.id}
          onClick={() => selectCard(card.id)}
        >
          <div className="front"/>
          <div
            className="back"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/minions/${card.color}.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
        </div>
      )
    })
  )
}