let state = [
  [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
]
let moves = []
let playerTurn = 'O'
let winner = false

const setPlayerTurn = () => {
  if (playerTurn === 'X') {
    playerTurn = 'O'
  } else if (playerTurn === 'O') {
    playerTurn = 'X'
  }
}

const setPlayerTurnText = () => {
  playerTurnText.textContent = `Turn: Player ${playerTurn}`
}

setPlayerTurn()
playerTurnText.textContent = `Turn: Player X`

const checkScore = () => {
  let combo

  if (playerTurn === 'O') {
    combo = crossWinCombo
  } else {
    combo = circleWinCombo
  }
  const showResults = (result) => {
    if (result === 'draw') {
      playerTurnText.textContent = `Draw`
      winner = true
    } else {
      if (playerTurn === 'O') {
        playerTurnText.textContent = `Player X Wins`
        winner = true
      } else {
        playerTurnText.textContent = `Player O Wins`
      }
    }
  }
  if (state[0][0][0] === combo[0][0][0] && state[0][0][1] === combo[0][0][1] && state[0][0][2] === combo[0][0][2]) {
    console.log(`xxx`)
    console.log(`---`)
    console.log(`---`)
    showResults()
  } else if (
    state[0][1][0] === combo[1][1][0] &&
    state[0][1][1] === combo[1][1][1] &&
    state[0][1][2] === combo[1][1][2]
  ) {
    console.log(`---`)
    console.log(`xxx`)
    console.log(`---`)
    showResults()
  } else if (
    state[0][2][0] === combo[2][2][0] &&
    state[0][2][1] === combo[2][2][1] &&
    state[0][2][2] === combo[2][2][2]
  ) {
    console.log(`---`)
    console.log(`---`)
    console.log(`xxx`)
    showResults()
  } else if (
    state[0][0][0] === combo[3][0][0] &&
    state[0][1][0] === combo[3][1][0] &&
    state[0][2][0] === combo[3][2][0]
  ) {
    console.log(`x--`)
    console.log(`x--`)
    console.log(`x--`)
    showResults()
  } else if (
    state[0][0][1] === combo[4][0][1] &&
    state[0][1][1] === combo[4][1][1] &&
    state[0][2][1] === combo[4][2][1]
  ) {
    console.log(`-x-`)
    console.log(`-x-`)
    console.log(`-x-`)
    showResults()
  } else if (
    state[0][0][2] === combo[5][0][2] &&
    state[0][1][2] === combo[5][1][2] &&
    state[0][2][2] === combo[5][2][2]
  ) {
    console.log(`--x`)
    console.log(`--x`)
    console.log(`--x`)
    showResults()
  } else if (
    state[0][0][0] === combo[6][0][0] &&
    state[0][1][1] === combo[6][1][1] &&
    state[0][2][2] === combo[6][2][2]
  ) {
    console.log(`x--`)
    console.log(`-x-`)
    console.log(`--x`)
    showResults()
  } else if (
    state[0][0][2] === combo[7][0][2] &&
    state[0][1][1] === combo[7][1][1] &&
    state[0][2][0] === combo[7][2][0]
  ) {
    console.log(`--x`)
    console.log(`-x-`)
    console.log(`x--`)
    showResults()
  } else if (moves.length === 9) {
    const noMovesArr = [
      [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
    ]
    if (state[0][0] !== noMovesArr[0][0] && state[0][1] !== noMovesArr[0][1] && state[0][2] !== noMovesArr[0][2]) {
      console.log(`draw`)
      showResults('draw')
    }
  }
}
