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

upperLeftBox.addEventListener('click', () => (upperLeftBox.textContent = 'X'))
upperMiddleBox.addEventListener('click', () => (upperMiddleBox.textContent = 'O'))
upperRightBox.addEventListener('click', () => (upperRightBox.textContent = 'X'))
middleLeftBox.addEventListener('click', () => (middleLeftBox.textContent = 'O'))
middleMiddleBox.addEventListener('click', () => (middleMiddleBox.textContent = 'X'))
middleRightBox.addEventListener('click', () => (middleRightBox.textContent = 'O'))
lowerLeftBox.addEventListener('click', () => (lowerLeftBox.textContent = 'X'))
lowerMiddleBox.addEventListener('click', () => (lowerMiddleBox.textContent = 'O'))
lowerRightBox.addEventListener('click', () => (lowerRightBox.textContent = 'X'))
