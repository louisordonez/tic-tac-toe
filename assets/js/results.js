const showResults = (result) => {
  if (result === 'draw') {
    playerTurnText.textContent = `Draw`
    resultsModalText.textContent = `Draw`
  } else {
    if (playerTurn === 'O') {
      playerTurnText.textContent = `${playerCrossName} wins!`
      resultsModalText.textContent = `${playerCrossName} wins!`
      playerCrossScore += 1
    } else {
      playerTurnText.textContent = `${playerCircleName} wins!`
      resultsModalText.textContent = `${playerCircleName} wins!`
      playerCircleScore += 1
    }
    setScore()
  }
  resultsModal.style.display = 'block'
  setGameStatus(true)
}
