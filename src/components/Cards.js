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