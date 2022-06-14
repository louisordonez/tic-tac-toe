const setPlayerMove = () => {
  moves.push(JSON.parse(JSON.stringify(state)))
}

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
  if (playerTurn === 'X') {
    playerTurnText.style.color = yellowColor
  } else {
    playerTurnText.style.color = redColor
  }
  playerTurnText.textContent = `Turn: ${playerTurnName}`
}
