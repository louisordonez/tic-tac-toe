// Setup
const setupSection = document.querySelector('[data-setup]');
const startCrossButton = document.querySelector('[data-start-cross]');
const startCircleButton = document.querySelector('[data-start-circle]');
const playerCrossNameInput = document.querySelector('[data-player-cross-name]');
const playerCircleNameInput = document.querySelector('[data-player-circle-name]');
let firstPlayer;
let playerTurn;
let playerCrossName;
let playerCircleName;
let playerTurnName;

// Main
const mainSection = document.querySelector('[data-main]');

// Score
const playerCrossScoreText = document.querySelector('[data-player-cross-score]');
const playerCircleScoreText = document.querySelector('[data-player-circle-score]');
let playerCrossScore = 0;
let playerCircleScore = 0;

// Player
const playerTurnText = document.querySelector('[data-player]');

// Settings
const settingsButton = document.querySelector('[data-settings]');

// Board
const boxes = document.querySelectorAll('[data-box]');
const upperLeftBox = document.querySelector('[data-upper-left]');
const upperCenterBox = document.querySelector('[data-upper-center]');
const upperRightBox = document.querySelector('[data-upper-right]');
const middleLeftBox = document.querySelector('[data-middle-left]');
const middleCenterBox = document.querySelector('[data-middle-center]');
const middleRightBox = document.querySelector('[data-middle-right]');
const lowerLeftBox = document.querySelector('[data-lower-left]');
const lowerCenterBox = document.querySelector('[data-lower-center]');
const lowerRightBox = document.querySelector('[data-lower-right]');
let boxIndexes = [];

// Buttons
const redoButton = document.querySelector('[data-redo]');
const resetButton = document.querySelector('[data-reset]');
const undoButton = document.querySelector('[data-undo]');
const movesButton = document.querySelector('[data-moves]');

// Modal
const movesModal = document.querySelector('[data-moves-modal]');
const movesModalClose = document.querySelector('[data-moves-close]');
const movesModalListContainer = document.querySelector('[data-moves-list-container]');
const resultsModal = document.querySelector('[data-results-modal]');
const resultsModalText = document.querySelector('[data-results-text]');
const resultsModalClose = document.querySelector('[data-results-close]');

// Colors
const yellowColor = 'rgb(244, 193, 66)';
const redColor = 'rgb(235, 88, 81)';

// isDone, State, and Moves
let isDone;
let state = [
  [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
];
let moves = [];
let movesIndex;
let movesFlat;

// Winning Combinations
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const setGameStatus = (status) => {
  if (status === true) {
    isDone = true;
    movesIndex = moves.length - 1;
  } else {
    isDone = false;
  }
};

const setInitialState = () => {
  const noMoves = [
    [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
  ];

  setGameStatus(false);
  moves.length = 0;
  moves.push(JSON.parse(JSON.stringify(noMoves)));
  movesFlat = undefined;
  movesIndex = undefined;
};
