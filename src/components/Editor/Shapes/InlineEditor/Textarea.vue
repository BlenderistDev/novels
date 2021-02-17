<template lang="pug">
textarea(
  v-model="prop"
  :style="styleObject"
)
</template>

<script>
import PropertyMixin from '../../ShapeParameters/Parameters/ParametersMixin'

export default {
  mixins: [
    PropertyMixin
  ],
  props: [
    'areaPosition',
    'textNode'
  ],
  computed: {
    styleObject () {
      return {
        position: 'absolute',
        top: this.areaPosition.y + 'px',
        left: this.areaPosition.x + 'px',
        width: this.textNode.width() - this.textNode.padding() * 2 + 'px',
        height: this.textNode.height() - this.textNode.padding() * 2 + 5 + 'px',
        fontSize: this.textNode.fontSize() + 'px',
        border: 'none',
        padding: '0px',
        margin: '0px',
        overflow: 'hidden',
        background: 'none',
        outline: 'none',
        resize: 'none',
        lineHeight: this.textNode.lineHeight(),
        fontFamily: this.textNode.fontFamily(),
        transformOrigin: 'left top',
        textAlign: this.textNode.align(),
        color: this.textNode.fill()
      }
    }
  }
}
</script>
