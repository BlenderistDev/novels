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
import _ from 'lodash'

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
