export function generateColorsCards(size) {
  const halfArray = new Array(size ** 2 / 2)
      .fill('')
      // .map(() => `#${(Math.random().toString(16) + "000000").substring(2,8)}`)
      .map((_, index) => index + 1)
  const result = [...halfArray, ...halfArray].map((card, index) => {
    return {
      id: index+'_'+card,
      color: card,
      flipped: false,
      hide: false
    }
  })
  return shuffle(result)
}

export function isFlippedCards(state, index) {
  return state.opened.length !== 2 && !state.opened.includes(index) && !state.cards[index].hide
}

export function isGameOver(state) {
  return state.hidedCount === (state.size**2 / 2)
}

export function isCheckingSelectedCards(state) {
  return state.opened.length > 1
}

export function isDoubles(state) {
  return state.cards[state.opened[0]].color !== state.cards[state.opened[1]].color
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}