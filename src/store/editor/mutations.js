export function addShape (state, config) {
  state.shapeList.push(config)
}

export function updateShape (state, e) {
  state.shapeList.forEach((shape, index) => {
    if (index === e.target.index) {
      shape.x = e.target.attrs.x
      shape.y = e.target.attrs.y
      shape.scaleX = e.target.attrs.scaleX
      shape.scaleY = e.target.attrs.scaleY
    }
  })
}

export function showEditor (state) {
  state.editorContent = ''
  state.showEditor = true
}

export function hideEditor (state) {
  state.editorContent = ''
  state.showEditor = false
}
