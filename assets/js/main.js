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

// let playerTurn = 'X'

// const setPlayerTurn = () => {
//   if (playerTurn === 'X') {
//     playerTurn = 'O'
//   } else if (playerTurn === 'O') {
//     playerTurn = 'X'
//   }
// }

const addMove = (text) => {
  const newP = document.createElement('p')
  const newContent = document.createTextNode(text)
  newP.style.fontWeight = '600'
  newP.appendChild(newContent)
  movesModalList.appendChild(newP)
}

upperLeftBox.addEventListener('click', () => {
  if (upperLeftBox.textContent === '') {
    state[0][0][0] = 'X'
    upperLeftBox.textContent = 'X'
    moves.push(JSON.parse(JSON.stringify(state)))
    console.log(moves)
  }
})

upperMiddleBox.addEventListener('click', () => {
  if (upperMiddleBox.textContent === '') {
    state[0][0][1] = 'O'
    upperMiddleBox.textContent = 'O'
    moves.push(JSON.parse(JSON.stringify(state)))
    console.log(moves)
  }
})
// upperRightBox.addEventListener('click', () => (upperRightBox.textContent = setPlayerTurn()))
// middleLeftBox.addEventListener('click', () => (middleLeftBox.textContent = setPlayerTurn()))
// middleMiddleBox.addEventListener('click', () => (middleMiddleBox.textContent = setPlayerTurn()))
// middleRightBox.addEventListener('click', () => (middleRightBox.textContent = setPlayerTurn()))
// lowerLeftBox.addEventListener('click', () => (lowerLeftBox.textContent = setPlayerTurn()))
// lowerMiddleBox.addEventListener('click', () => (lowerMiddleBox.textContent = setPlayerTurn()))
// lowerRightBox.addEventListener('click', () => (lowerRightBox.textContent = setPlayerTurn()))
