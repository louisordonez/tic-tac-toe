const setScore = (result) => {
  playerCrossScoreText.style.color = yellowColor;
  playerCrossScoreText.textContent = `${playerCrossName}: ${playerCrossScore}`;
  playerCircleScoreText.style.color = redColor;
  playerCircleScoreText.textContent = `${playerCircleName}: ${playerCircleScore}`;
};

const resetScore = () => {
  playerCrossScore = 0;
  playerCircleScore = 0;
};
