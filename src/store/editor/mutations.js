// import Vue from 'vue'

export function addCircle (state, config) {
  state.circleList.push(config)
}

export function circleDragStart (state, e) {
  state.circleList.forEach((circle, index) => {
    if (index === e.target.index) {
      circle.isDragging = true
    }
  })
  // Vue.set(state.circleList, data.index, data.attrs)
  // state.circleList[data.index] = data.attrs
  // state.circleList = { ...state.circleList, newProp: 123 };
  // const circleList = state.circleList
  // circleList[data.index] = data.attrs
  // state.circleList = circleList
  // Vue.set(state.circleList, data.index, data.attrs)
  // state.$set(state.circleList, data.attrs, data.index)
}

export function circleDragStop (state, e) {
  state.circleList.forEach((circle, index) => {
    if (index === e.target.index) {
      circle.isDragging = false
    }
  })
}

export function circleUpdate (state, e) {
  state.circleList.forEach((circle, index) => {
    if (index === e.target.index) {
      circle.x = e.target.attrs.x
      circle.y = e.target.attrs.y
    }
  })
}

export function addImage (state, config) {
  state.imageList.push(config)
}

export function addText (state, config) {
  state.textList.push(config)
}
