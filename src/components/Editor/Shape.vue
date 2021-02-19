<template lang="pug">
  component(
    :is="shapeComponent"
    :config="shape"
    @mousedown="setSelectedShape(shape.name)"
    @touchstart="setSelectedShape(shape.name)"
    @transformend="updateShapeFromEvent($event)"
  )
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import CircleShape from './Shapes/CircleShape'
import ImageShape from './Shapes/ImageShape'
import TextShape from './Shapes/TextShape'
import RectShape from './Shapes/RectShape'
import EllipseShape from './Shapes/EllipseShape'
import StarShape from './Shapes/StarShape'
import LabelShape from './Shapes/LabelShape'
import _ from 'lodash'

export default {
  components: {
    CircleShape,
    ImageShape,
    TextShape,
    RectShape,
    EllipseShape,
    StarShape,
    LabelShape
  },
  props: {
    shapeName: String
  },
  computed: {
    shapeComponent () {
      return `${this.shape.type}Shape`
    },
    shape () {
      return _.find(this.shapeList, { name: this.shapeName })
    },
    ...mapState('editor', ['shapeList'])
  },
  methods: {
    ...mapMutations('editor', [
      'setSelectedShape'
    ]),
    ...mapActions('editor', [
      'updateShapeFromEvent'
    ])
  }
}
</script>
