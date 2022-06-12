let playerTurn = 'O'
let done = false
let playerTurnName

const setPlayerTurn = () => {
  if (playerTurn === 'X') {
    playerTurn = 'O'
    playerTurnName = playerCircleName
  } else if (playerTurn === 'O') {
    playerTurn = 'X'
    playerTurnName = playerCrossName
  }
}

const showPlayerTurnText = () => {
  playerTurnText.textContent = `Turn: ${playerTurnName}`
}

const showResults = (result) => {
  done = true
  if (result === 'draw') {
    playerTurnText.textContent = `Draw`
    resultsModalText.textContent = `Draw`
  } else {
    if (playerTurn === 'O') {
      playerTurnText.textContent = `${playerCrossName} wins!`
      resultsModalText.textContent = `${playerCrossName} wins!`
      playerCrossScore += 1
      showScore()
    } else {
      playerTurnText.textContent = `${playerCircleName} wins!`
      resultsModalText.textContent = `${playerCircleName} wins!`
      playerCircleScore += 1
      showScore()
    }
  }
  resultsModal.style.display = 'block'
}

const checkCombination = () => {
  let combo

  if (playerTurn === 'O') {
    combo = crossWinCombo
  } else {
    combo = circleWinCombo
  }
  if (
    // XXX OOO
    // --- ---
    // --- ---
    state[0][0][0] === combo[0][0][0] &&
    state[0][0][1] === combo[0][0][1] &&
    state[0][0][2] === combo[0][0][2]
  ) {
    showResults()
  } else if (
    // --- ---
    // XXX OOO
    // --- ---
    state[0][1][0] === combo[1][1][0] &&
    state[0][1][1] === combo[1][1][1] &&
    state[0][1][2] === combo[1][1][2]
  ) {
    showResults()
  } else if (
    // --- ---
    // --- ---
    // XXX OOO
    state[0][2][0] === combo[2][2][0] &&
    state[0][2][1] === combo[2][2][1] &&
    state[0][2][2] === combo[2][2][2]
  ) {
    showResults()
  } else if (
    // X-- O--
    // X-- O--
    // X-- O--
    state[0][0][0] === combo[3][0][0] &&
    state[0][1][0] === combo[3][1][0] &&
    state[0][2][0] === combo[3][2][0]
  ) {
    showResults()
  } else if (
    // -X- -O-
    // -X- -O-
    // -X- -O-
    state[0][0][1] === combo[4][0][1] &&
    state[0][1][1] === combo[4][1][1] &&
    state[0][2][1] === combo[4][2][1]
  ) {
    showResults()
  } else if (
    // --X --O
    // --X --O
    // --X --O
    state[0][0][2] === combo[5][0][2] &&
    state[0][1][2] === combo[5][1][2] &&
    state[0][2][2] === combo[5][2][2]
  ) {
    showResults()
  } else if (
    // X-- O--
    // -X- -O-
    // --X --O
    state[0][0][0] === combo[6][0][0] &&
    state[0][1][1] === combo[6][1][1] &&
    state[0][2][2] === combo[6][2][2]
  ) {
    showResults()
  } else if (
    // --X --O
    // -X- -O-
    // X-- O--
    state[0][0][2] === combo[7][0][2] &&
    state[0][1][1] === combo[7][1][1] &&
    state[0][2][0] === combo[7][2][0]
  ) {
    showResults()
  } else if (moves.length === 9) {
    // Draw
    if (state[0][0] !== noMoves[0][0] && state[0][1] !== noMoves[0][1] && state[0][2] !== noMoves[0][2]) {
      showResults('draw')
    }
  }
}
