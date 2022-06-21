const addMove = (box, turn) => {
  box.textContent = turn;
  turn === 'X' ? (box.style.color = yellowColor) : (box.style.color = redColor);
};

const setBoxes = () => {
  const addBoxFunctions = () => {
    setPlayerMove();
    setPlayerTurn();
    showPlayerTurnText();
    checkCombination();
    setButtons();
  };

  boxes.forEach((box, i) => {
    box.addEventListener('click', () => {
      if (box.textContent === '' && isDone === false) {
        switch (i) {
          case 0:
            state[0][0][0] = playerTurn;
            addMove(upperLeftBox, playerTurn);
            addMoveToList(playerTurn, `${playerTurnName}: Upper Left Box`);
            addBoxFunctions();
            break;
          case 1:
            state[0][0][1] = playerTurn;
            addMove(upperCenterBox, playerTurn);
            addMoveToList(playerTurn, `${playerTurnName}: Upper Center Box`);
            addBoxFunctions();
            break;
          case 2:
            state[0][0][2] = playerTurn;
            addMove(upperRightBox, playerTurn);
            addMoveToList(playerTurn, `${playerTurnName}: Upper Right Box`);
            addBoxFunctions();
            break;
          case 3:
            state[0][1][0] = playerTurn;
            addMove(middleLeftBox, playerTurn);
            addMoveToList(playerTurn, `${playerTurnName}: Middle Left Box`);
            addBoxFunctions();
            break;
          case 4:
            state[0][1][1] = playerTurn;
            addMove(middleCenterBox, playerTurn);
            addMoveToList(playerTurn, `${playerTurnName}: Middle Center Box`);
            addBoxFunctions();
            break;
          case 5:
            state[0][1][2] = playerTurn;
            addMove(middleRightBox, playerTurn);
            addMoveToList(playerTurn, `${playerTurnName}: Middle Right Box`);
            addBoxFunctions();
            break;
          case 6:
            state[0][2][0] = playerTurn;
            addMove(lowerLeftBox, playerTurn);
            addMoveToList(playerTurn, `${playerTurnName}: Lower Left Box`);
            addBoxFunctions();
            break;
          case 7:
            state[0][2][1] = playerTurn;
            addMove(lowerCenterBox, playerTurn);
            addMoveToList(playerTurn, `${playerTurnName}: Lower Center Box`);
            addBoxFunctions();
            break;
          case 8:
            state[0][2][2] = playerTurn;
            addMove(lowerRightBox, playerTurn);
            addMoveToList(playerTurn, `${playerTurnName}: Lower Right Box`);
            addBoxFunctions();
            break;
        }
      }
    });
  });
};
