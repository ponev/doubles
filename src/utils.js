export function generateColorsCards(size) {
  const halfArray = getRandomArray(1, 32, size ** 2 / 2)
  const result = [...halfArray, ...halfArray]
    .map((card, index) => {
      return {
        id: `${card}_${index}`,
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
function getRandomArray (min, max, length) {
  const arr = [];
  while(arr.length < length){
    const rand = Math.floor(min + Math.random() * (max + 1 - min))
    if (arr.indexOf(rand) === -1) arr.push(rand)
  }
  return arr
}