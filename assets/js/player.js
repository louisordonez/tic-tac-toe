const setPlayerTurn = () => {
  if (playerTurn === 'X') {
    playerTurn = 'O'
    playerTurnName = playerCircleName
  } else if (playerTurn === 'O') {
    playerTurn = 'X'
    playerTurnName = playerCrossName
  }
}

const showPlayerTurnText = () => {
  playerTurnText.textContent = `Turn: ${playerTurnName}`
}
