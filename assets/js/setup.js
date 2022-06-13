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
  setScore()
}

const setPlayer = () => {
  setupSection.style.display = 'none'
  mainSection.style.display = 'block'
  setPlayerName()
  setPlayerTurn()
  showPlayerTurnText()
}

startCrossButton.addEventListener('click', () => {
  playerTurn = 'O'
  setPlayer()
})
startCircleButton.addEventListener('click', () => {
  playerTurn = 'X'
  setPlayer()
})
