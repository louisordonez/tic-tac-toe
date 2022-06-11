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
  newP.style.fontWeight = '600'
  newP.appendChild(newContent)
  movesModalList.appendChild(newP)
}

movesButton.addEventListener('click', () => (movesModal.style.display = 'block'))
movesModalClose.addEventListener('click', () => (movesModal.style.display = 'none'))
window.addEventListener('click', (event) => {
  if (event.target == movesModal) {
    movesModal.style.display = 'none'
  }
})

// Reset
const resetGame = () => {
  const box = document.getElementsByClassName('box')

  done = false
  moves.length = 0
  state.forEach((rows) => {
    rows.forEach((innerRows) => {
      for (let i = 0; i < innerRows.length; i++) {
        innerRows[i] = ''
      }
    })
  })
  for (let i = 0; i < box.length; i++) {
    box[i].textContent = ''
  }
  playerTurn = 'X'
  playerTurnText.textContent = `Turn: Player ${playerTurn}`
  enableButtons()
}

resetButton.addEventListener('click', () => resetGame())
