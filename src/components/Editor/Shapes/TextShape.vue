<template lang="pug">
  v-text(
    v-if="!isEditing"
    ref="node"
    :config="config"
    @mousedown="$emit('mousedown', $event)"
    @dblclick="edit($event)"
    @touchstart="$emit('mousedown', $event)"
    @transformend="$emit('transformend', $event)"
    @dragmove="updateShape({...$event.target.attrs})"
  )
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  props: {
    config: Object,
    stage: Object
  },
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    ...mapMutations('editor', [
      'updateShape'
    ]),
    ...mapActions('editor', [
      'updateShapeFromEvent'
    ]),
    edit (event) {
      this.isEditing = true
      const textNode = this.$refs.node.getNode()

      const stageBox = this.stage.getStage().container().getBoundingClientRect()

      const textPosition = textNode.absolutePosition()

      // so position of textarea will be the sum of positions above:
      const areaPosition = {
        x: stageBox.left + textPosition.x,
        y: stageBox.top + textPosition.y
      }

      // create textarea and style it
      const textarea = document.createElement('textarea')
      document.body.appendChild(textarea)

      // apply many styles to match text on canvas as close as possible
      // remember that text rendering on canvas and on the textarea can be different
      // and sometimes it is hard to make it 100% the same. But we will try...
      textarea.value = textNode.text()
      textarea.style.position = 'absolute'
      textarea.style.top = areaPosition.y + 'px'
      textarea.style.left = areaPosition.x + 'px'
      textarea.style.width = textNode.width() - textNode.padding() * 2 + 'px'
      textarea.style.height = textNode.height() - textNode.padding() * 2 + 5 + 'px'
      textarea.style.fontSize = textNode.fontSize() + 'px'
      textarea.style.border = 'none'
      textarea.style.padding = '0px'
      textarea.style.margin = '0px'
      textarea.style.overflow = 'hidden'
      textarea.style.background = 'none'
      textarea.style.outline = 'none'
      textarea.style.resize = 'none'
      textarea.style.lineHeight = textNode.lineHeight()
      textarea.style.fontFamily = textNode.fontFamily()
      textarea.style.transformOrigin = 'left top'
      textarea.style.textAlign = textNode.align()
      textarea.style.color = textNode.fill()
      const rotation = textNode.rotation()
      let transform = ''
      if (rotation) {
        transform += 'rotateZ(' + rotation + 'deg)'
      }

      let px = 0
      // also we need to slightly move textarea on firefox
      // because it jumps a bit
      const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
      if (isFirefox) {
        px += 2 + Math.round(textNode.fontSize() / 20)
      }
      transform += 'translateY(-' + px + 'px)'

      textarea.style.transform = transform

      // reset height
      textarea.style.height = 'auto'
      // after browsers resized it we can set actual value
      textarea.style.height = textarea.scrollHeight + 3 + 'px'

      textarea.focus()
    }
  }
}
</script>
