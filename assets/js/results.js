const addWinAnimation = (indexes) => {
  indexes.forEach((index) => boxes[index].classList.add('expanding-animation'));
};

const showResults = (result) => {
  if (result === 'draw') {
    playerTurnText.style.color = 'white';
    playerTurnText.textContent = `Draw!`;
    resultsModalText.style.color = 'black';
    resultsModalText.textContent = `Draw!`;
  } else {
    if (playerTurn === 'O') {
      playerTurnText.style.color = yellowColor;
      playerTurnText.textContent = `${playerCrossName} wins!`;
      resultsModalText.style.color = yellowColor;
      resultsModalText.textContent = `${playerCrossName} wins!`;
      playerCrossScore += 1;
    } else {
      playerTurnText.style.color = redColor;
      playerTurnText.textContent = `${playerCircleName} wins!`;
      resultsModalText.style.color = redColor;
      resultsModalText.textContent = `${playerCircleName} wins!`;
      playerCircleScore += 1;
    }
    setScore();
  }
  resultsModal.style.display = 'block';
  setGameStatus(true);
};

resultsModalClose.addEventListener('click', () => (resultsModal.style.display = 'none'));
window.addEventListener('click', (event) => {
  if (event.target === resultsModal) {
    resultsModal.style.display = 'none';
  }
});
