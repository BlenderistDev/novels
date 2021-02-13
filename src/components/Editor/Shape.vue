<template lang="pug">
  component(
    :is="shapeComponent"
    :config="shape"
    @mousedown="setSelectedShape(shape)"
    @touchstart="setSelectedShape(shape)"
    @transformend="updateShape($event)"
  )
</template>

<script>
import { mapMutations } from 'vuex'
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
  },
  methods: {
    ...mapMutations('editor', [
      'updateShape',
      'setSelectedShape'
    ])
  }
}
</script>
