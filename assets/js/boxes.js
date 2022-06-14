const addMove = (box, turn) => {
  box.textContent = turn
  if (turn === 'X') {
    box.style.color = yellowColor
  } else {
    box.style.color = redColor
  }
}

upperLeftBox.addEventListener('click', () => {
  if (upperLeftBox.textContent === '' && done === false) {
    state[0][0][0] = playerTurn
    addMove(upperLeftBox, playerTurn)
    addMoveToList(playerTurn, `${playerTurnName}: Upper Left Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    setButtons()
  }
})
upperCenterBox.addEventListener('click', () => {
  if (upperCenterBox.textContent === '' && done === false) {
    state[0][0][1] = playerTurn
    addMove(upperCenterBox, playerTurn)
    addMoveToList(playerTurn, `${playerTurnName}: Upper Center Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    setButtons()
  }
})
upperRightBox.addEventListener('click', () => {
  if (upperRightBox.textContent === '' && done === false) {
    state[0][0][2] = playerTurn
    addMove(upperRightBox, playerTurn)
    addMoveToList(playerTurn, `${playerTurnName}: Upper Right Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    setButtons()
  }
})
middleLeftBox.addEventListener('click', () => {
  if (middleLeftBox.textContent === '' && done === false) {
    state[0][1][0] = playerTurn
    addMove(middleLeftBox, playerTurn)
    addMoveToList(playerTurn, `${playerTurnName}: Middle Left Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    setButtons()
  }
})
middleCenterBox.addEventListener('click', () => {
  if (middleCenterBox.textContent === '' && done === false) {
    state[0][1][1] = playerTurn
    addMove(middleCenterBox, playerTurn)
    addMoveToList(playerTurn, `${playerTurnName}: Middle Center Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    setButtons()
  }
})
middleRightBox.addEventListener('click', () => {
  if (middleRightBox.textContent === '' && done === false) {
    state[0][1][2] = playerTurn
    addMove(middleRightBox, playerTurn)
    addMoveToList(playerTurn, `${playerTurnName}: Middle Right Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    setButtons()
  }
})
lowerLeftBox.addEventListener('click', () => {
  if (lowerLeftBox.textContent === '' && done === false) {
    state[0][2][0] = playerTurn
    addMove(lowerLeftBox, playerTurn)
    addMoveToList(playerTurn, `${playerTurnName}: Lower Left Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    setButtons()
  }
})
lowerCenterBox.addEventListener('click', () => {
  if (lowerCenterBox.textContent === '' && done === false) {
    state[0][2][1] = playerTurn
    addMove(lowerCenterBox, playerTurn)
    addMoveToList(playerTurn, `${playerTurnName}: Lower Center Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    setButtons()
  }
})
lowerRightBox.addEventListener('click', () => {
  if (lowerRightBox.textContent === '' && done === false) {
    state[0][2][2] = playerTurn
    addMove(lowerRightBox, playerTurn)
    addMoveToList(playerTurn, `${playerTurnName}: Lower Right Box`)
    setPlayerMove()
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    setButtons()
  }
})
