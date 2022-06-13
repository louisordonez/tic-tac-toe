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
  if (player === 'X') {
    playerTurn = 'X'
  } else {
    playerTurn = 'O'
  }
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
})
startCircleButton.addEventListener('click', () => {
  setGame('X')
})
