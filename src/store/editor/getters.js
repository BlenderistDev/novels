import _ from 'lodash'

export const selectedShape = (state) => {
  return _.find(state.shapeList, { name: state.selectedShapeName })
}
