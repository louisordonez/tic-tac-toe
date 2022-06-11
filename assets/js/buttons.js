const enableButtons = () => {
  if (done === true) {
    redoButton.disabled = false
    undoButton.disabled = false
  } else {
    redoButton.disabled = true
    undoButton.disabled = true
  }
}

enableButtons()
