upperLeftBox.addEventListener('click', () => {
  if (upperLeftBox.textContent === '' && done === false) {
    state[0][0][0] = playerTurn
    upperLeftBox.textContent = playerTurn
    addMoveToList(`${playerTurnName}: Upper Left Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
upperCenterBox.addEventListener('click', () => {
  if (upperCenterBox.textContent === '' && done === false) {
    state[0][0][1] = playerTurn
    upperCenterBox.textContent = playerTurn
    addMoveToList(`${playerTurnName}: Upper Center Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
upperRightBox.addEventListener('click', () => {
  if (upperRightBox.textContent === '' && done === false) {
    state[0][0][2] = playerTurn
    upperRightBox.textContent = playerTurn
    addMoveToList(`${playerTurnName}: Upper Right Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
middleLeftBox.addEventListener('click', () => {
  if (middleLeftBox.textContent === '' && done === false) {
    state[0][1][0] = playerTurn
    middleLeftBox.textContent = playerTurn
    addMoveToList(`${playerTurnName}: Middle Left Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
middleCenterBox.addEventListener('click', () => {
  if (middleCenterBox.textContent === '' && done === false) {
    state[0][1][1] = playerTurn
    middleCenterBox.textContent = playerTurn
    addMoveToList(`${playerTurnName}: Middle Center Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
middleRightBox.addEventListener('click', () => {
  if (middleRightBox.textContent === '' && done === false) {
    state[0][1][2] = playerTurn
    middleRightBox.textContent = playerTurn
    addMoveToList(`${playerTurnName}: Middle Right Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
lowerLeftBox.addEventListener('click', () => {
  if (lowerLeftBox.textContent === '' && done === false) {
    state[0][2][0] = playerTurn
    lowerLeftBox.textContent = playerTurn
    addMoveToList(`${playerTurnName}: Lower Left Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
lowerCenterBox.addEventListener('click', () => {
  if (lowerCenterBox.textContent === '' && done === false) {
    state[0][2][1] = playerTurn
    lowerCenterBox.textContent = playerTurn
    addMoveToList(`${playerTurnName}: Lower Center Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
lowerRightBox.addEventListener('click', () => {
  if (lowerRightBox.textContent === '' && done === false) {
    state[0][2][2] = playerTurn
    lowerRightBox.textContent = playerTurn
    addMoveToList(`${playerTurnName}: Lower Right Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
