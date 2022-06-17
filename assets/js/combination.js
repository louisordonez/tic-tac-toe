const checkCombination = () => {
  const checkWin = () => {
    let player

    playerTurn === 'O' ? (player = 'X') : (player = 'O')
    return winCombos.some((winCombo) => {
      boxIndexes = winCombo
      return winCombo.every((index) => {
        return boxes[index].textContent === player
      })
    })
  }

  if (checkWin() === true) {
    showResults()
    addWinAnimation(boxIndexes)
  } else if (moves.length === 10) {
    let allBoxes = []

    boxes.forEach((box, i) => {
      allBoxes.push(i)
    })
    showResults('draw')
    addWinAnimation(allBoxes)
  }
}
