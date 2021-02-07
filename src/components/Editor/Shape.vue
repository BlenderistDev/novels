<template lang="pug">
  component(
    :is="shapeComponent"
    :config="shape"
    @mousedown="$emit('mousedown', $event)"
    @touchstart="$emit('mousedown', $event)"
    @transformend="$emit('transformend', $event)"
  )
</template>

<script>
import CircleShape from './Shapes/CircleShape'
import ImageShape from './Shapes/ImageShape'
import TextShape from './Shapes/TextShape'

export default {
  components: {
    CircleShape,
    ImageShape,
    TextShape
  },
  props: {
    shape: Object
  },
  computed: {
    shapeComponent () {
      return `${this.shape.type}Shape`
    }
  }
}
</script>
