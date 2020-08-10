import React from 'react'

export const Cards = ({cards, selectCard}) => {

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
          onClick={() => {selectCard(card.id)}}
        >
          <div className="front"/>
          <div className="back" style={{backgroundColor: card.color}}/>
        </div>
      )
    })
  )
}