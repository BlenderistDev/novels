<template lang="pug">
div
  div {{ selectedShape }}
  component(
    v-if="selectedShape"
    :is="shapeComponent"
  )
  StageParameters(v-else)
</template>

<script>
import { mapGetters } from 'vuex'
import StageParameters from './ShapeParameters/StageParameters'
import CircleParameters from './ShapeParameters/CircleParameters'
import ImageParameters from './ShapeParameters/ImageParameters'
import TextParameters from './ShapeParameters/TextParameters'
import RectParameters from './ShapeParameters/RectParameters'
import EllipseParameters from './ShapeParameters/EllipseParameters'
import StarParameters from './ShapeParameters/StarParameters'
import LabelParameters from './ShapeParameters/LabelParameters'
import RingParameters from './ShapeParameters/RingParameters'
import ShapeArrowParameters from './ShapeParameters/ShapeArrowParameters'
import GroupParameters from './ShapeParameters/GroupParameters'

export default {
  components: {
    StageParameters,
    CircleParameters,
    ImageParameters,
    TextParameters,
    RectParameters,
    EllipseParameters,
    StarParameters,
    LabelParameters,
    RingParameters,
    ShapeArrowParameters,
    GroupParameters
  },
  computed: {
    ...mapGetters('editor', [
      'selectedShape'
    ]),
    shapeComponent () {
      if (this.selectedShape !== undefined) {
        return `${this.selectedShape.type}Parameters`
      } else {
        return ''
      }
    }
  }
}
</script>
