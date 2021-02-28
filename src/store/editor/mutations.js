import _ from 'lodash'

export function addShape (state, config) {
  state.shapeList.push(config)
  state.selectedShapeName = config.name
}

export function setShapeList (state, shapeList) {
  state.shapeList = shapeList
}

export function updateShape (state, config) {
  const shapeIndex = _.findIndex(state.shapeList, { name: config.name })
  const shapeList = [...state.shapeList]
  shapeList[shapeIndex] = config
  state.shapeList = shapeList
}

export function updateTextShape (state, { key, image, text }) {
  state.shapeList.forEach((shape, index) => {
    if (key === index) {
      shape.image = image
      shape.text = text
    }
  })
}

export function setBackgroundImage (state, image) {
  state.backgroundImage = image
}

export function setStageConfig (state, config) {
  state.stageConfig = config
}

export function setSelectedShape (state, name) {
  state.selectedShapeName = name
}
