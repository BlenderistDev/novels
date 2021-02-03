// import Vue from 'vue'

export function addCircle (state, config) {
  state.circleList.push(config)
}

export function circleUpdate (state, e) {
  state.circleList.forEach((circle, index) => {
    if (index === e.target.index) {
      // console.log(e.target.attrs)
      circle.x = e.target.attrs.x
      circle.y = e.target.attrs.y
      circle.scaleX = e.target.attrs.scaleX
      circle.scaleY = e.target.attrs.scaleY
      // circle.radius = e.target.attrs.radius
    }
  })
}

export function addImage (state, config) {
  state.imageList.push(config)
}

export function addText (state, config) {
  state.textList.push(config)
}
