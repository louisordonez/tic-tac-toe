const setButtons = () => {
  if (isDone === true) {
    undoButton.disabled = false;
  } else {
    redoButton.disabled = true;
    undoButton.disabled = true;
  }
};

// Settings
settingsButton.addEventListener('click', () => {
  setupSection.style.display = 'block';
  mainSection.style.display = 'none';
  resetGame();
  resetScore();
});

// Undo
undoButton.addEventListener('click', () => {
  movesIndex -= 1;
  movesFlat = moves[movesIndex].flat().flat();
  boxes.forEach((box, i) => {
    box.textContent = movesFlat[i];
  });
  if (movesIndex <= 0) {
    undoButton.disabled = true;
  } else if (movesIndex >= 0) {
    redoButton.disabled = false;
  }
});

// Redo
redoButton.addEventListener('click', () => {
  let redoIndex;

  movesIndex += 1;
  movesFlat = moves[movesIndex].flat().flat();
  boxes.forEach((box, i) => {
    box.textContent = movesFlat[i];
  });
  if (movesIndex >= moves.length - 1) {
    redoButton.disabled = true;
  } else if (movesIndex <= moves.length - 1) {
    undoButton.disabled = false;
  }
  redoIndex = movesIndex - 1;
});

// Reset
const resetGame = () => {
  const movesItems = document.querySelectorAll('[data-moves-item]');

  state.forEach((rows) => {
    rows.forEach((innerRows) => {
      for (let i = 0; i < innerRows.length; i++) {
        innerRows[i] = '';
      }
    });
  });
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove('expanding-animation');
    boxes[i].textContent = '';
  }
  for (let i = 0; i < movesItems.length; i++) {
    movesItems[i].remove();
  }
  if (firstPlayer === 'X') {
    playerTurn = 'X';
    playerTurnText.style.color = yellowColor;
    playerTurnName = playerCrossName;
  } else if (firstPlayer === 'O') {
    playerTurn = 'O';
    playerTurnText.style.color = redColor;
    playerTurnName = playerCircleName;
  }
  playerTurnText.textContent = `Turn: ${playerTurnName}`;
  setInitialState();
  setBoxes();
  setButtons();
};

movesButton.addEventListener('click', () => {
  movesModal.style.display = 'block';
  if (isDone === true) {
    selectMove();
  }
});
resetButton.addEventListener('click', () => resetGame());
