const showResults = (result) => {
  if (result === 'draw') {
    playerTurnText.textContent = `Draw!`
    resultsModalText.textContent = `Draw!`
  } else {
    if (playerTurn === 'O') {
      playerTurnText.style.color = yellowColor
      playerTurnText.textContent = `${playerCrossName} wins!`
      resultsModalText.textContent = `${playerCrossName} wins!`
      playerCrossScore += 1
    } else {
      playerTurnText.style.color = redColor
      playerTurnText.textContent = `${playerCircleName} wins!`
      resultsModalText.textContent = `${playerCircleName} wins!`
      playerCircleScore += 1
    }
    setScore()
  }
  resultsModal.style.display = 'block'
  setGameStatus(true)
}

resultsModalClose.addEventListener('click', () => (resultsModal.style.display = 'none'))
window.addEventListener('click', (event) => {
  if (event.target == resultsModal) {
    resultsModal.style.display = 'none'
  }
})
