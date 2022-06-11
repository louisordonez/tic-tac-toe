let playerTurn = 'O'
let done = false

const setPlayerTurn = () => {
  if (playerTurn === 'X') {
    playerTurn = 'O'
  } else if (playerTurn === 'O') {
    playerTurn = 'X'
  }
}

const showPlayerTurnText = () => {
  playerTurnText.textContent = `Turn: Player ${playerTurn}`
}

const showResult = (result) => {
  if (result === 'draw') {
    playerTurnText.textContent = `Draw`
    done = true
  } else {
    if (playerTurn === 'O') {
      playerTurnText.textContent = `Player X Wins`
      done = true
    } else {
      playerTurnText.textContent = `Player O Wins`
    }
  }
}

const checkCombination = () => {
  let combo

  if (playerTurn === 'O') {
    combo = crossWinCombo
  } else {
    combo = circleWinCombo
  }
  if (state[0][0][0] === combo[0][0][0] && state[0][0][1] === combo[0][0][1] && state[0][0][2] === combo[0][0][2]) {
    console.log(`xxx`)
    console.log(`---`)
    console.log(`---`)
    showResult()
  } else if (
    state[0][1][0] === combo[1][1][0] &&
    state[0][1][1] === combo[1][1][1] &&
    state[0][1][2] === combo[1][1][2]
  ) {
    console.log(`---`)
    console.log(`xxx`)
    console.log(`---`)
    showResult()
  } else if (
    state[0][2][0] === combo[2][2][0] &&
    state[0][2][1] === combo[2][2][1] &&
    state[0][2][2] === combo[2][2][2]
  ) {
    console.log(`---`)
    console.log(`---`)
    console.log(`xxx`)
    showResult()
  } else if (
    state[0][0][0] === combo[3][0][0] &&
    state[0][1][0] === combo[3][1][0] &&
    state[0][2][0] === combo[3][2][0]
  ) {
    console.log(`x--`)
    console.log(`x--`)
    console.log(`x--`)
    showResult()
  } else if (
    state[0][0][1] === combo[4][0][1] &&
    state[0][1][1] === combo[4][1][1] &&
    state[0][2][1] === combo[4][2][1]
  ) {
    console.log(`-x-`)
    console.log(`-x-`)
    console.log(`-x-`)
    showResult()
  } else if (
    state[0][0][2] === combo[5][0][2] &&
    state[0][1][2] === combo[5][1][2] &&
    state[0][2][2] === combo[5][2][2]
  ) {
    console.log(`--x`)
    console.log(`--x`)
    console.log(`--x`)
    showResult()
  } else if (
    state[0][0][0] === combo[6][0][0] &&
    state[0][1][1] === combo[6][1][1] &&
    state[0][2][2] === combo[6][2][2]
  ) {
    console.log(`x--`)
    console.log(`-x-`)
    console.log(`--x`)
    showResult()
  } else if (
    state[0][0][2] === combo[7][0][2] &&
    state[0][1][1] === combo[7][1][1] &&
    state[0][2][0] === combo[7][2][0]
  ) {
    console.log(`--x`)
    console.log(`-x-`)
    console.log(`x--`)
    showResult()
  } else if (moves.length === 9) {
    if (state[0][0] !== noMoves[0][0] && state[0][1] !== noMoves[0][1] && state[0][2] !== noMoves[0][2]) {
      console.log(`draw`)
      showResult('draw')
    }
  }
}

setPlayerTurn()
playerTurnText.textContent = `Turn: Player X`
