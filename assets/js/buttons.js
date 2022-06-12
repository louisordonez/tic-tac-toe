const enableButtons = () => {
  if (done === true) {
    redoButton.disabled = false
    undoButton.disabled = false
  } else {
    redoButton.disabled = true
    undoButton.disabled = true
  }
}

enableButtons()

// Moves
const addMoveToList = (text) => {
  const newP = document.createElement('p')
  const newContent = document.createTextNode(text)

  newP.setAttribute('data-moves-item', '')
  newP.style.fontWeight = '600'
  newP.appendChild(newContent)
  movesModalListContainer.appendChild(newP)
}

movesButton.addEventListener('click', () => (movesModal.style.display = 'block'))
movesModalClose.addEventListener('click', () => (movesModal.style.display = 'none'))
window.addEventListener('click', (event) => {
  if (event.target == movesModal) {
    movesModal.style.display = 'none'
  }
})

// Results
resultsModalClose.addEventListener('click', () => (resultsModal.style.display = 'none'))
window.addEventListener('click', (event) => {
  if (event.target == resultsModal) {
    resultsModal.style.display = 'none'
  }
})

// Reset
const resetGame = () => {
  const movesItems = document.querySelectorAll('[data-moves-item]')

  done = false
  moves.length = 0
  state.forEach((rows) => {
    rows.forEach((innerRows) => {
      for (let i = 0; i < innerRows.length; i++) {
        innerRows[i] = ''
      }
    })
  })
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = ''
  }
  playerTurn = 'O'
  setPlayerTurn()
  showPlayerTurnText()
  for (let i = 0; i < movesItems.length; i++) {
    movesItems[i].remove()
  }
  enableButtons()
}

resetButton.addEventListener('click', () => resetGame())
