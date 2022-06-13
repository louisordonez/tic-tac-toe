// Moves
const addMoveToList = (text) => {
  const newP = document.createElement('p')
  const newContent = document.createTextNode(text)

  newP.setAttribute('data-moves-item', '')
  newP.style.fontWeight = '600'
  newP.appendChild(newContent)
  movesModalListContainer.appendChild(newP)
}

const enableButtons = () => {
  if (done === true) {
    movesIndex = moves.length - 1
    undoButton.disabled = false
  } else {
    redoButton.disabled = true
    undoButton.disabled = true
  }
}

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
  let redoIndex = movesIndex - 1
  movesItems[redoIndex].style.display = 'block'
})

// Reset
const resetGame = () => {
  const movesItems = document.querySelectorAll('[data-moves-item]')

  done = false
  moves.length = 0
  moves = [
    [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
  ]
  movesFlat = undefined
  movesIndex = undefined
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
  enableButtons()
}

movesButton.addEventListener('click', () => (movesModal.style.display = 'block'))
movesModalClose.addEventListener('click', () => (movesModal.style.display = 'none'))
window.addEventListener('click', (event) => {
  if (event.target == movesModal) {
    movesModal.style.display = 'none'
  }
})
resultsModalClose.addEventListener('click', () => (resultsModal.style.display = 'none'))
window.addEventListener('click', (event) => {
  if (event.target == resultsModal) {
    resultsModal.style.display = 'none'
  }
})
resetButton.addEventListener('click', () => resetGame())
enableButtons()
