// Player
const playerTurnText = document.querySelector('[data-player]')

// Board
const upperLeftBox = document.querySelector('[data-upper-left]')
const upperMiddleBox = document.querySelector('[data-upper-middle]')
const upperRightBox = document.querySelector('[data-upper-right]')
const middleLeftBox = document.querySelector('[data-middle-left]')
const middleMiddleBox = document.querySelector('[data-middle-middle]')
const middleRightBox = document.querySelector('[data-middle-right]')
const lowerLeftBox = document.querySelector('[data-lower-left]')
const lowerMiddleBox = document.querySelector('[data-lower-middle]')
const lowerRightBox = document.querySelector('[data-lower-right]')

//Buttons
const redoButton = document.querySelector('[data-redo]')
const resetButton = document.querySelector('[data-reset]')
const undoButton = document.querySelector('[data-undo]')
const movesButton = document.querySelector('[data-moves]')

// Modal
const movesModal = document.querySelector('[data-moves-modal]')
const movesModalClose = document.querySelector('[data-moves-modal-close]')
const movesModalList = document.querySelector('[data-moves-list-container]')

movesButton.addEventListener('click', () => (movesModal.style.display = 'block'))
movesModalClose.addEventListener('click', () => (movesModal.style.display = 'none'))
window.addEventListener('click', (event) => {
  if (event.target == movesModal) {
    movesModal.style.display = 'none'
  }
})

// Turn
let state = [
  [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
]
let moves = []
let playerTurn = 'O'

const setPlayerTurn = () => {
  if (playerTurn === 'X') {
    playerTurn = 'O'
  } else if (playerTurn === 'O') {
    playerTurn = 'X'
  }
}

const setPlayerTurnText = () => {
  playerTurnText.textContent = playerTurn
}

setPlayerTurn()
playerTurnText.textContent = 'X'

const addMove = (text) => {
  const newP = document.createElement('p')
  const newContent = document.createTextNode(text)
  newP.style.fontWeight = '600'
  newP.appendChild(newContent)
  movesModalList.appendChild(newP)
}

upperLeftBox.addEventListener('click', () => {
  if (upperLeftBox.textContent === '') {
    state[0][0][0] = playerTurn
    upperLeftBox.textContent = playerTurn
    addMove(`Player ${playerTurn}: Upper Left Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    console.log(moves)
    setPlayerTurn()
    setPlayerTurnText()
  }
})
upperMiddleBox.addEventListener('click', () => {
  if (upperMiddleBox.textContent === '') {
    state[0][0][1] = playerTurn
    upperMiddleBox.textContent = playerTurn
    addMove(`Player ${playerTurn}: Upper Middle Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    console.log(moves)
    setPlayerTurn()
    setPlayerTurnText()
  }
})
upperRightBox.addEventListener('click', () => {
  if (upperRightBox.textContent === '') {
    state[0][0][2] = playerTurn
    upperRightBox.textContent = playerTurn
    addMove(`Player ${playerTurn}: Upper Right Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    console.log(moves)
    setPlayerTurn()
    setPlayerTurnText()
  }
})
middleLeftBox.addEventListener('click', () => {
  if (middleLeftBox.textContent === '') {
    state[0][1][0] = playerTurn
    middleLeftBox.textContent = playerTurn
    addMove(`Player ${playerTurn}: Middle Left Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    console.log(moves)
    setPlayerTurn()
    setPlayerTurnText()
  }
})
middleMiddleBox.addEventListener('click', () => {
  if (middleMiddleBox.textContent === '') {
    state[0][1][1] = playerTurn
    middleMiddleBox.textContent = playerTurn
    addMove(`Player ${playerTurn}: Middle Middle Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    console.log(moves)
    setPlayerTurn()
    setPlayerTurnText()
  }
})
middleRightBox.addEventListener('click', () => {
  if (middleRightBox.textContent === '') {
    state[0][1][2] = playerTurn
    middleRightBox.textContent = playerTurn
    addMove(`Player ${playerTurn}: Middle Right Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    console.log(moves)
    setPlayerTurn()
    setPlayerTurnText()
  }
})
lowerLeftBox.addEventListener('click', () => {
  if (lowerLeftBox.textContent === '') {
    state[0][2][0] = playerTurn
    lowerLeftBox.textContent = playerTurn
    addMove(`Player ${playerTurn}: Lower Left Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    console.log(moves)
    setPlayerTurn()
    setPlayerTurnText()
  }
})
lowerMiddleBox.addEventListener('click', () => {
  if (lowerMiddleBox.textContent === '') {
    state[0][2][1] = playerTurn
    lowerMiddleBox.textContent = playerTurn
    addMove(`Player ${playerTurn}: Lower Middle Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    console.log(moves)
    setPlayerTurn()
    setPlayerTurnText()
  }
})
lowerRightBox.addEventListener('click', () => {
  if (lowerRightBox.textContent === '') {
    state[0][2][2] = playerTurn
    lowerRightBox.textContent = playerTurn
    addMove(`Player ${playerTurn}: Lower Right Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    console.log(moves)
    setPlayerTurn()
    setPlayerTurnText()
  }
})
