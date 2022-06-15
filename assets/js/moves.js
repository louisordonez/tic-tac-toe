const selectMove = () => {
  const movesItems = document.querySelectorAll('[data-moves-item]')
  let index

  const showMove = (index) => {
    movesFlat = moves[index].flat().flat()
    boxes.forEach((box, i) => {
      box.textContent = movesFlat[i]
    })
    movesIndex = index
    if (movesIndex <= 0) {
      undoButton.disabled = true
    } else if (movesIndex >= 0) {
      redoButton.disabled = false
    }
    if (movesIndex >= moves.length - 1) {
      redoButton.disabled = true
    } else if (movesIndex <= moves.length - 1) {
      undoButton.disabled = false
    }
  }
  for (let i = 0; i < movesItems.length; i++) {
    movesItems[i].onclick = function () {
      index = i + 1
      showMove(index)
      movesModal.style.display = 'none'
    }
  }
}

const addMoveToList = (turn, text) => {
  const newDiv = document.createElement('div')
  const newP = document.createElement('p')
  const newContent = document.createTextNode(text)

  newDiv.setAttribute('data-moves-item', '')
  newP.style.fontWeight = '600'
  newP.appendChild(newContent)
  if (turn === 'X') {
    newDiv.classList.add('yellow-move')
  } else {
    newDiv.classList.add('red-move')
  }

  newDiv.appendChild(newP)
  movesModalListContainer.appendChild(newDiv)
}

movesModalClose.addEventListener('click', () => (movesModal.style.display = 'none'))
window.addEventListener('click', (event) => {
  if (event.target === movesModal) {
    movesModal.style.display = 'none'
  }
})
