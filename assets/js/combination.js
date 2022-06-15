const checkCombination = () => {
  let combo

  playerTurn === 'O' ? (combo = crossWinCombo) : (combo = circleWinCombo)
  if (
    // XXX OOO
    // --- ---
    // --- ---
    state[0][0][0] === combo[0][0][0] &&
    state[0][0][1] === combo[0][0][1] &&
    state[0][0][2] === combo[0][0][2]
  ) {
    addWinAnimation(boxes[0], boxes[1], boxes[2])
    showResults()
  } else if (
    // --- ---
    // XXX OOO
    // --- ---
    state[0][1][0] === combo[1][1][0] &&
    state[0][1][1] === combo[1][1][1] &&
    state[0][1][2] === combo[1][1][2]
  ) {
    addWinAnimation(boxes[3], boxes[4], boxes[5])
    showResults()
  } else if (
    // --- ---
    // --- ---
    // XXX OOO
    state[0][2][0] === combo[2][2][0] &&
    state[0][2][1] === combo[2][2][1] &&
    state[0][2][2] === combo[2][2][2]
  ) {
    addWinAnimation(boxes[6], boxes[7], boxes[8])
    showResults()
  } else if (
    // X-- O--
    // X-- O--
    // X-- O--
    state[0][0][0] === combo[3][0][0] &&
    state[0][1][0] === combo[3][1][0] &&
    state[0][2][0] === combo[3][2][0]
  ) {
    addWinAnimation(boxes[0], boxes[3], boxes[6])
    showResults()
  } else if (
    // -X- -O-
    // -X- -O-
    // -X- -O-
    state[0][0][1] === combo[4][0][1] &&
    state[0][1][1] === combo[4][1][1] &&
    state[0][2][1] === combo[4][2][1]
  ) {
    addWinAnimation(boxes[1], boxes[4], boxes[7])
    showResults()
  } else if (
    // --X --O
    // --X --O
    // --X --O
    state[0][0][2] === combo[5][0][2] &&
    state[0][1][2] === combo[5][1][2] &&
    state[0][2][2] === combo[5][2][2]
  ) {
    addWinAnimation(boxes[2], boxes[5], boxes[8])
    showResults()
  } else if (
    // X-- O--
    // -X- -O-
    // --X --O
    state[0][0][0] === combo[6][0][0] &&
    state[0][1][1] === combo[6][1][1] &&
    state[0][2][2] === combo[6][2][2]
  ) {
    addWinAnimation(boxes[0], boxes[4], boxes[8])
    showResults()
  } else if (
    // --X --O
    // -X- -O-
    // X-- O--
    state[0][0][2] === combo[7][0][2] &&
    state[0][1][1] === combo[7][1][1] &&
    state[0][2][0] === combo[7][2][0]
  ) {
    addWinAnimation(boxes[2], boxes[4], boxes[6])
    showResults()
  } else if (
    // Draw
    state[0][0] !== noMoves[0][0] &&
    state[0][1] !== noMoves[0][1] &&
    state[0][2] !== noMoves[0][2] &&
    moves.length === 10
  ) {
    showResults('draw')
  }
}
