const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

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
