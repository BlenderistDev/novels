<template lang="pug">
  component(
    :is="shapeComponent"
    :config="shape"
  )
</template>

<script>
import CircleShape from './CircleShape'
import ImageShape from './ImageShape'
import TextShape from './TextShape'
import RectShape from './RectShape'
import EllipseShape from './EllipseShape'
import StarShape from './StarShape'
import LabelShape from './LabelShape'
import RingShape from './RingShape'
import ShapeArrowShape from './ShapeArrowShape'
import GroupShape from './GroupShape'

export default {
  components: {
    CircleShape,
    ImageShape,
    TextShape,
    RectShape,
    EllipseShape,
    StarShape,
    LabelShape,
    RingShape,
    ShapeArrowShape,
    GroupShape
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
