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
  if (player === 'O') {
    playerTurn = 'O'
  } else {
    playerTurn = 'X'
  }
  setupSection.style.display = 'none'
  mainSection.style.display = 'block'
  setPlayerName()
  setPlayerTurn()
  showPlayerTurnText()
  setInitialState()
  enableButtons()
}

startCrossButton.addEventListener('click', () => {
  setGame('O')
})
startCircleButton.addEventListener('click', () => {
  setGame('X')
})
