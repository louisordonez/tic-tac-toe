const addMoveToList = (turn, text) => {
  const newDiv = document.createElement('div')
  const newP = document.createElement('p')
  const newContent = document.createTextNode(text)

  newDiv.setAttribute('data-moves-item', '')
  newP.style.fontWeight = '600'
  newP.appendChild(newContent)
  if (turn === 'X') {
    newDiv.style.backgroundColor = 'rgb(244, 193, 66)'
  } else {
    newDiv.style.backgroundColor = 'rgb(235, 88, 81)'
  }
  newDiv.appendChild(newP)
  movesModalListContainer.appendChild(newDiv)
}

movesModalClose.addEventListener('click', () => (movesModal.style.display = 'none'))
window.addEventListener('click', (event) => {
  if (event.target == movesModal) {
    movesModal.style.display = 'none'
  }
})
