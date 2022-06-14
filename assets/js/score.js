const setScore = () => {
  playerCrossScoreText.textContent = `${playerCrossName}: ${playerCrossScore}`
  playerCircleScoreText.textContent = `${playerCircleName}: ${playerCircleScore}`
}

const resetScore = () => {
  playerCrossScore = 0
  playerCircleScore = 0
}
