<template lang="pug">
v-group(
  :config="config"
  @mousedown="$emit('mousedown', $event)"
  @touchstart="$emit('mousedown', $event)"
  @transformend="$emit('transformend', $event)"
  @dragmove="updateGroupShape($event)"
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
  },
  methods: {
    updateGroupShape (event) {
      const config = { ...event.target.attrs }
      // _.map(config.shapes, shapeName => {
      //   const newShape = { ..._.find(this.shapeList, { name: shapeName }) }
      //   console.log(newShape)
      //   newShape.offsetX = config.x
      //   newShape.offsetY = config.y
      //   // newShape.scaleX = newShape.scaleX + config.scaleX
      //   // newShape.scaleY = newShape.scaleY + config.scaleY
      //   this.updateShape(newShape)
      // })
      this.updateShape(config)
    }
  }
}
</script>
