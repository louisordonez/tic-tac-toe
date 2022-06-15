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

const setGame = (player) => {
  // Set initial current player turn
  player === 'X' ? (playerTurn = 'X') : (playerTurn = 'O')

  setupSection.style.display = 'none'
  mainSection.style.display = 'block'
  setPlayerName()
  setPlayerTurn()
  showPlayerTurnText()
  setInitialState()
  setButtons()
}

startCrossButton.addEventListener('click', () => {
  setGame('O')
  firstPlayer = 'X'
})
startCircleButton.addEventListener('click', () => {
  setGame('X')
  firstPlayer = 'O'
})
