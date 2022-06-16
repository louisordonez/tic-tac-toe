const addMove = (box, turn) => {
  box.textContent = turn
  turn === 'X' ? (box.style.color = yellowColor) : (box.style.color = redColor)
}

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.textContent === '' && isDone === false) {
      let boxAttributes = box.getAttributeNames()
      let boxAttribute = boxAttributes[boxAttributes.length - 1]

      switch (boxAttribute) {
        case 'data-upper-left':
          state[0][0][0] = playerTurn
          addMove(upperLeftBox, playerTurn)
          addMoveToList(playerTurn, `${playerTurnName}: Upper Left Box`)
          setPlayerMove()
          setPlayerTurn()
          showPlayerTurnText()
          checkCombination()
          setButtons()
          break
        case 'data-upper-center':
          state[0][0][1] = playerTurn
          addMove(upperCenterBox, playerTurn)
          addMoveToList(playerTurn, `${playerTurnName}: Upper Center Box`)
          setPlayerMove()
          setPlayerTurn()
          showPlayerTurnText()
          checkCombination()
          setButtons()
          break
        case 'data-upper-right':
          state[0][0][2] = playerTurn
          addMove(upperRightBox, playerTurn)
          addMoveToList(playerTurn, `${playerTurnName}: Upper Right Box`)
          setPlayerMove()
          setPlayerTurn()
          showPlayerTurnText()
          checkCombination()
          setButtons()
          break
        case 'data-middle-left':
          state[0][1][0] = playerTurn
          addMove(middleLeftBox, playerTurn)
          addMoveToList(playerTurn, `${playerTurnName}: Middle Left Box`)
          setPlayerMove()
          setPlayerTurn()
          showPlayerTurnText()
          checkCombination()
          setButtons()
          break
        case 'data-middle-center':
          state[0][1][1] = playerTurn
          addMove(middleCenterBox, playerTurn)
          addMoveToList(playerTurn, `${playerTurnName}: Middle Center Box`)
          setPlayerMove()
          setPlayerTurn()
          showPlayerTurnText()
          checkCombination()
          setButtons()
          break
        case 'data-middle-right':
          state[0][1][2] = playerTurn
          addMove(middleRightBox, playerTurn)
          addMoveToList(playerTurn, `${playerTurnName}: Middle Right Box`)
          setPlayerMove()
          setPlayerTurn()
          showPlayerTurnText()
          checkCombination()
          setButtons()
          break
        case 'data-lower-left':
          state[0][2][0] = playerTurn
          addMove(lowerLeftBox, playerTurn)
          addMoveToList(playerTurn, `${playerTurnName}: Lower Left Box`)
          setPlayerMove()
          setPlayerTurn()
          showPlayerTurnText()
          checkCombination()
          setButtons()
          break
        case 'data-lower-center':
          state[0][2][1] = playerTurn
          addMove(lowerCenterBox, playerTurn)
          addMoveToList(playerTurn, `${playerTurnName}: Lower Center Box`)
          setPlayerMove()
          setPlayerTurn()
          showPlayerTurnText()
          checkCombination()
          setButtons()
          break
        case 'data-lower-right':
          state[0][2][2] = playerTurn
          addMove(lowerRightBox, playerTurn)
          addMoveToList(playerTurn, `${playerTurnName}: Lower Right Box`)
          setPlayerMove()
          setPlayerTurn()
          showPlayerTurnText()
          checkCombination()
          setButtons()
          break
      }
    }
  })
})
