<template lang="pug">
v-group(
  :config="config"
  @mousedown="$emit('mousedown', $event)"
  @touchstart="$emit('mousedown', $event)"
  @transformend="$emit('transformend', $event)"
  @dragmove="updateShape({...$event.target.attrs})"
)
  Shape(
    v-for="(shape, index) in groupShapeList"
    :key="index"
    :shape="shape"
  )
</template>

<script>
import UpdateShapeMixin from './UpdateShapeMixin'
import Shape from './Shape'
import { mapState } from 'vuex'
import _ from 'lodash'

export default {
  mixins: [UpdateShapeMixin],
  components: {
    Shape
  },
  computed: {
    groupShapeList () {
      return _.filter([...this.shapeList], shape => shape.group === this.config.name)
    },
    ...mapState('editor', [
      'shapeList'
    ])
  }
}
</script>
