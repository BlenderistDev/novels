export function addShape (state, config) {
  state.wysiwygTarget = state.shapeList.push(config) - 1
  state.showEditor = true
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

export function updateShapeImage (state, { key, image }) {
  state.shapeList.forEach((shape, index) => {
    if (key === index) {
      shape.image = image
    }
  })
}

export function showWysiwyg (state, { event, content }) {
  state.wysiwygTarget = event.target.index
  state.wysiwygContent = content
  state.showEditor = true
}

export function hideWysiwyg (state) {
  state.wysiwigContent = ''
  state.showEditor = false
}

export function setWysiwygContent (state, content) {
  state.wysiwigContent = content
  // state.shapeList.forEach((shape, index) => {
  //   if (index === state.wysiwygTarget) {
  //     shape.text = content
  //   }
  // })
}
