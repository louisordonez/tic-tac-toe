upperLeftBox.addEventListener('click', () => {
  if (upperLeftBox.textContent === '' && winner == false) {
    state[0][0][0] = playerTurn
    upperLeftBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Upper Left Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    setPlayerTurnText()
    checkScore()
  }
})
upperMiddleBox.addEventListener('click', () => {
  if (upperMiddleBox.textContent === '' && winner == false) {
    state[0][0][1] = playerTurn
    upperMiddleBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Upper Middle Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    setPlayerTurnText()
    checkScore()
  }
})
upperRightBox.addEventListener('click', () => {
  if (upperRightBox.textContent === '' && winner == false) {
    state[0][0][2] = playerTurn
    upperRightBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Upper Right Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    setPlayerTurnText()
    checkScore()
  }
})
middleLeftBox.addEventListener('click', () => {
  if (middleLeftBox.textContent === '' && winner == false) {
    state[0][1][0] = playerTurn
    middleLeftBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Middle Left Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    setPlayerTurnText()
    checkScore()
  }
})
middleMiddleBox.addEventListener('click', () => {
  if (middleMiddleBox.textContent === '' && winner == false) {
    state[0][1][1] = playerTurn
    middleMiddleBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Middle Middle Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    setPlayerTurnText()
    checkScore()
  }
})
middleRightBox.addEventListener('click', () => {
  if (middleRightBox.textContent === '' && winner == false) {
    state[0][1][2] = playerTurn
    middleRightBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Middle Right Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    setPlayerTurnText()
    checkScore()
  }
})
lowerLeftBox.addEventListener('click', () => {
  if (lowerLeftBox.textContent === '' && winner == false) {
    state[0][2][0] = playerTurn
    lowerLeftBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Lower Left Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    setPlayerTurnText()
    checkScore()
  }
})
lowerMiddleBox.addEventListener('click', () => {
  if (lowerMiddleBox.textContent === '' && winner == false) {
    state[0][2][1] = playerTurn
    lowerMiddleBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Lower Middle Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    setPlayerTurnText()
    checkScore()
  }
})
lowerRightBox.addEventListener('click', () => {
  if (lowerRightBox.textContent === '' && winner == false) {
    state[0][2][2] = playerTurn
    lowerRightBox.textContent = playerTurn
    addMoveToList(`Player ${playerTurn}: Lower Right Box`)
    moves.push(JSON.parse(JSON.stringify(state)))
    setPlayerTurn()
    setPlayerTurnText()
    checkScore()
  }
})
