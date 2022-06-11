// Player
const playerTurnText = document.querySelector('[data-player]')

// Board
const boxes = document.querySelectorAll('[data-box]')
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

// State and Moves
let state = [
  [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
]
let moves = []

const noMoves = [
  [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
]

// Winning Combinations
const crossWinCombo = [
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

const circleWinCombo = [
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
