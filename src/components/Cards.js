import React from 'react'

export const Cards = () => {
  let cards = new Array(16)

  return (
    <>
      {cards.fill('').map((_, index) => (
        <div className="card" key={index}>
          <div className="front"/>
          <div className="back"/>
        </div>
      ))}
    </>
  )
}