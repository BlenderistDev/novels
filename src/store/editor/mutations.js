export function addShape (state, config) {
  return state.shapeList.push(config)
}

export function setShapeList (state, shapeList) {
  state.shapeList = shapeList
}

export function addText (state, config) {
  state.wysiwygTarget = addShape(state, config) - 1
  state.wysiwygContent = ''
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

export function updateTextShape (state, { key, image, text }) {
  state.shapeList.forEach((shape, index) => {
    if (key === index) {
      shape.image = image
      shape.text = text
    }
  })
}

export function hideWysiwyg (state) {
  state.wysiwygContent = ''
  state.wysiwygTarget = null
}

export function showWysiwyg (state, { event, content }) {
  state.wysiwygContent = content
  state.wysiwygTarget = event.target.index
}

export function setWysiwygContent (state, content) {
  state.wysiwygContent = content
}

export function setBackgroundImage (state, image) {
  state.backgroundImage = image
}

export function setStageConfig (state, config) {
  state.stageConfig = config
}
