<template lang="pug">
v-layer
  Shape(
    v-for="(shape, index) in ungroupedShapeList"
    :key="index"
    :shapeName="shape.name"
  )
  Transformer
</template>

<script>
import { mapState } from 'vuex'
import Transformer from '../Transformer'
import Shape from '../Shape'
import _ from 'lodash'

export default {
  components: {
    Transformer,
    Shape
  },
  computed: {
    ...mapState('editor', [
      'shapeList'
    ]),
    ungroupedShapeList () {
      return _.filter([...this.shapeList], shape => shape.group === '')
    }
  }
}
</script>
