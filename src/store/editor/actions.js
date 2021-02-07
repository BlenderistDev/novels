import html2canvas from 'html2canvas'

export function setWysiwygContent ({ commit, state }, content) {
  commit('setWysiwygContent', content)
  state.shapeList.forEach((shape, index) => {
    if (index === state.wysiwygTarget) {
      console.log(content)
      html2canvas(document.querySelector('.ql-editor'), {
        backgroundColor: 'rgba(0,0,0,0)'
      }).then((canvas) => {
        const shapeConfig = { ...shape }
        shapeConfig.image = canvas
        commit('updateTextShape', {
          image: canvas,
          text: content,
          key: state.wysiwygTarget
        })
        // shape.image(canvas)
        // layer.batchDraw()
      })
      // shape.text = content
    }
  })
}
