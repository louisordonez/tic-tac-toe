// Player
const playerText = document.querySelector('[data-player]')

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

movesButton.addEventListener('click', () => (movesModal.style.display = 'block'))
movesModalClose.addEventListener('click', () => (movesModal.style.display = 'none'))
window.addEventListener('click', (event) => {
  if (event.target == movesModal) {
    movesModal.style.display = 'none'
  }
})

// Turn
let playerTurn = 'X'
playerText.textContent = playerTurn

const setPlayerTurn = () => {
  if (playerTurn == 'X') {
    playerTurn = 'O'
  } else {
    playerTurn = 'X'
  }
  playerText.textContent = playerTurn
  return playerTurn
}

upperLeftBox.addEventListener('click', () => (upperLeftBox.textContent = setPlayerTurn()))
upperMiddleBox.addEventListener('click', () => (upperMiddleBox.textContent = setPlayerTurn()))
upperRightBox.addEventListener('click', () => (upperRightBox.textContent = setPlayerTurn()))
middleLeftBox.addEventListener('click', () => (middleLeftBox.textContent = setPlayerTurn()))
middleMiddleBox.addEventListener('click', () => (middleMiddleBox.textContent = setPlayerTurn()))
middleRightBox.addEventListener('click', () => (middleRightBox.textContent = setPlayerTurn()))
lowerLeftBox.addEventListener('click', () => (lowerLeftBox.textContent = setPlayerTurn()))
lowerMiddleBox.addEventListener('click', () => (lowerMiddleBox.textContent = setPlayerTurn()))
lowerRightBox.addEventListener('click', () => (lowerRightBox.textContent = setPlayerTurn()))
