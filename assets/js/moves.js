const addMoveToList = (text) => {
  const newP = document.createElement('p')
  const newContent = document.createTextNode(text)

  newP.setAttribute('data-moves-item', '')
  newP.style.fontWeight = '600'
  newP.appendChild(newContent)
  movesModalListContainer.appendChild(newP)
}
