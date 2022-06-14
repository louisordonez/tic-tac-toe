const setButtons = () => {
  if (done === true) {
    undoButton.disabled = false
  } else {
    redoButton.disabled = true
    undoButton.disabled = true
  }
}

// Settings
settingsButton.addEventListener('click', () => location.reload())

// Undo
undoButton.addEventListener('click', () => {
  const movesItems = document.querySelectorAll('[data-moves-item]')

  movesIndex = movesIndex - 1
  movesFlat = moves[movesIndex].flat().flat()
  boxes.forEach((box, i) => {
    box.textContent = movesFlat[i]
  })
  if (movesIndex <= 0) {
    undoButton.disabled = true
  } else if (movesItems[movesIndex] !== undefined) {
    redoButton.disabled = false
  }
  movesItems[movesIndex].style.display = 'none'
})

// Redo
redoButton.addEventListener('click', () => {
  const movesItems = document.querySelectorAll('[data-moves-item]')
  let redoIndex

  movesIndex = movesIndex + 1
  movesFlat = moves[movesIndex].flat().flat()
  boxes.forEach((box, i) => {
    box.textContent = movesFlat[i]
  })
  if (movesItems[movesIndex] === undefined) {
    redoButton.disabled = true
  } else if (movesIndex <= !0) {
    undoButton.disabled = false
  }
  redoIndex = movesIndex - 1
  movesItems[redoIndex].style.display = 'block'
})

// Reset
const resetGame = () => {
  const movesItems = document.querySelectorAll('[data-moves-item]')

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
  for (let i = 0; i < movesItems.length; i++) {
    movesItems[i].remove()
  }
  setPlayerTurn()
  showPlayerTurnText()
  setInitialState()
  setButtons()
}

movesButton.addEventListener('click', () => (movesModal.style.display = 'block'))
resetButton.addEventListener('click', () => resetGame())