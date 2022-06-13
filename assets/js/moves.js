const addMoveToList = (text) => {
  const newP = document.createElement('p')
  const newContent = document.createTextNode(text)

  newP.setAttribute('data-moves-item', '')
  newP.style.fontWeight = '600'
  newP.appendChild(newContent)
  movesModalListContainer.appendChild(newP)
}

movesModalClose.addEventListener('click', () => (movesModal.style.display = 'none'))
window.addEventListener('click', (event) => {
  if (event.target == movesModal) {
    movesModal.style.display = 'none'
  }
})
