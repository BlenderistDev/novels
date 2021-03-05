import _ from 'lodash'

export const selectedShape = state => {
  return _.find(state.shapeList, { name: state.selectedShapeName })
}

export const groupList = state => {
  return _.filter(state.shapeList, shape => shape.type === 'Group')
}
