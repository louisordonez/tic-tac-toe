const setPlayerName = () => {
  playerCrossName = playerCrossNameInput.value
  playerCircleName = playerCircleNameInput.value

  if (playerCrossName === '' && playerCircleName !== '') {
    playerCrossName = 'Player X'
  } else if (playerCrossName !== '' && playerCircleName === '') {
    playerCircleName = 'Player O'
  } else if (playerCrossName === '' && playerCircleName === '') {
    playerCrossName = 'Player X'
    playerCircleName = 'Player O'
  }
  showScore()
}

startCrossButton.addEventListener('click', () => {
  playerTurn = 'O'
  setupSection.style.display = 'none'
  mainSection.style.display = 'block'
  setPlayerName()
  setPlayerTurn()
  showPlayerTurnText()
})

startCircleButton.addEventListener('click', () => {
  playerTurn = 'X'
  setupSection.style.display = 'none'
  mainSection.style.display = 'block'
  setPlayerName()
  setPlayerTurn()
  showPlayerTurnText()
})
