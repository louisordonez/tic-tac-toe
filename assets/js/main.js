// Player
const playerTurnText = document.querySelector('[data-player]')

// Board
const upperLeftBox = document.querySelector('[data-upper-left]')
const upperMiddleBox = document.querySelector('[data-upper-middle]')
const upperRightBox = document.querySelector('[data-upper-right]')
const middleLeftBox = document.querySelector('[data-middle-left]')
const middleMiddleBox = document.querySelector('[data-middle-middle]')
const middleRightBox = document.querySelector('[data-middle-right]')
const lowerLeftBox = document.querySelector('[data-lower-left]')
const lowerMiddleBox = document.querySelector('[data-lower-middle]')
const lowerRightBox = document.querySelector('[data-lower-right]')

// Buttons
const redoButton = document.querySelector('[data-redo]')
const resetButton = document.querySelector('[data-reset]')
const undoButton = document.querySelector('[data-undo]')
const movesButton = document.querySelector('[data-moves]')

// Modal
const movesModal = document.querySelector('[data-moves-modal]')
const movesModalClose = document.querySelector('[data-moves-modal-close]')
const movesModalList = document.querySelector('[data-moves-list-container]')

movesButton.addEventListener('click', () => (movesModal.style.display = 'block'))
movesModalClose.addEventListener('click', () => (movesModal.style.display = 'none'))
window.addEventListener('click', (event) => {
  if (event.target == movesModal) {
    movesModal.style.display = 'none'
  }
})

// Game Logic
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

const addMoveToList = (text) => {
  const newP = document.createElement('p')
  const newContent = document.createTextNode(text)
  newP.style.fontWeight = '600'
  newP.appendChild(newContent)
  movesModalList.appendChild(newP)
}

// Wining Combination
const xWinCombo = [
  [
    ['X', 'X', 'X'],
    ['', '', ''],
    ['', '', ''],
  ],
  [
    ['', '', ''],
    ['X', 'X', 'X'],
    ['', '', ''],
  ],
  [
    ['', '', ''],
    ['', '', ''],
    ['X', 'X', 'X'],
  ],
  [
    ['X', '', ''],
    ['X', '', ''],
    ['X', '', ''],
  ],
  [
    ['', 'X', ''],
    ['', 'X', ''],
    ['', 'X', ''],
  ],
  [
    ['', '', 'X'],
    ['', '', 'X'],
    ['', '', 'X'],
  ],
  [
    ['X', '', ''],
    ['', 'X', ''],
    ['', '', 'X'],
  ],
  [
    ['', '', 'X'],
    ['', 'X', ''],
    ['X', '', ''],
  ],
]

const oWinCombo = [
  [
    ['O', 'O', 'O'],
    ['', '', ''],
    ['', '', ''],
  ],
  [
    ['', '', ''],
    ['O', 'O', 'O'],
    ['', '', ''],
  ],
  [
    ['', '', ''],
    ['', '', ''],
    ['O', 'O', 'O'],
  ],
  [
    ['O', '', ''],
    ['O', '', ''],
    ['O', '', ''],
  ],
  [
    ['', 'O', ''],
    ['', 'O', ''],
    ['', 'O', ''],
  ],
  [
    ['', '', 'O'],
    ['', '', 'O'],
    ['', '', 'O'],
  ],
  [
    ['O', '', ''],
    ['', 'O', ''],
    ['', '', 'O'],
  ],
  [
    ['', '', 'O'],
    ['', 'O', ''],
    ['O', '', ''],
  ],
]

const checkScore = () => {
  let combo

  if (playerTurn === 'O') {
    combo = xWinCombo
  } else {
    combo = oWinCombo
  }
  const showResult = (result) => {
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
    const noMovesArr = [
      [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
    ]
    if (state[0][0] !== noMovesArr[0][0] && state[0][1] !== noMovesArr[0][1] && state[0][2] !== noMovesArr[0][2]) {
      console.log(`draw`)
      showResult('draw')
    }
  }
}

// Events
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
