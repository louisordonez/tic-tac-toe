upperLeftBox.addEventListener('click', () => {
  if (upperLeftBox.textContent === '' && done === false) {
    state[0][0][0] = playerTurn
    upperLeftBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Upper Left Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
upperMiddleBox.addEventListener('click', () => {
  if (upperMiddleBox.textContent === '' && done === false) {
    state[0][0][1] = playerTurn
    upperMiddleBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Upper Middle Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
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
    addMoveToList(`Player ${playerTurn}: Upper Right Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
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
    addMoveToList(`Player ${playerTurn}: Middle Left Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
middleMiddleBox.addEventListener('click', () => {
  if (middleMiddleBox.textContent === '' && done === false) {
    state[0][1][1] = playerTurn
    middleMiddleBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Middle Middle Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
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
    addMoveToList(`Player ${playerTurn}: Middle Right Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
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
    addMoveToList(`Player ${playerTurn}: Lower Left Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
lowerMiddleBox.addEventListener('click', () => {
  if (lowerMiddleBox.textContent === '' && done === false) {
    state[0][2][1] = playerTurn
    lowerMiddleBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Lower Middle Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
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
    addMoveToList(`Player ${playerTurn}: Lower Right Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    showPlayerTurnText()
    checkCombination()
    enableButtons()
  }
})
