const setPlayerName = () => {
  playerCrossName = playerCrossNameInput.value
  playerCircleName = playerCircleNameInput.value
  showScore()
}

startButton.addEventListener('click', () => {
  setupSection.style.display = 'none'
  mainSection.style.display = 'block'
  setPlayerName()
  setPlayerTurn()
  showPlayerTurnText()
})
