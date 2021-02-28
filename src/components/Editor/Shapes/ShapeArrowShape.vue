<template lang="pug">
v-arrow(
  :config="lineConfig"
  @mousedown="$emit('mousedown', $event)"
  @touchstart="$emit('mousedown', $event)"
  @transformend="$emit('transformend', $event)"
  @dragmove="updateShape({...$event.target.attrs})"
)
</template>

<script>
import UpdateShapeMixin from './UpdateShapeMixin'
import { mapState } from 'vuex'
import _ from 'lodash'

export default {
  mixins: [UpdateShapeMixin],
  computed: {
    ...mapState('editor', [
      'shapeList'
    ]),
    shape1 () {
      return _.find(this.shapeList, { name: this.config.shape1 })
    },
    shape2 () {
      return _.find(this.shapeList, { name: this.config.shape2 })
    },
    lineConfig () {
      const config = { ...this.config }
      if (this.config.shape1 && this.config.shape2) {
        // config.points = _.union(this.getShapeCenter(this.shape1), this.getShapeCenter(this.shape2))
        config.points = this.getConnectorPoints()
      }
      return config
    }
  },
  methods: {
    getShapeCenter (shape) {
      let x, y
      if (shape.radius) {
        x = shape.x
        y = shape.y
      } else {
        x = shape.x + shape.width * shape.scaleX / 2
        y = shape.y + shape.height * shape.scaleY / 2
      }
      return [x, y]
    },
    getConnectorPoints () {
      let x1, x2, y1, y2

      if (this.shape1.radius) {
        x1 = this.shape1.x
        y1 = this.shape1.y
      } else {
        x1 = this.shape1.x + this.shape1.width * this.shape1.scaleX / 2
        y1 = this.shape1.y + this.shape1.height * this.shape1.scaleY / 2
      }

      if (this.shape2.radius) {
        x2 = this.shape2.x
        y2 = this.shape2.y
      } else {
        x2 = this.shape2.x + this.shape2.width * this.shape2.scaleX / 2
        y2 = this.shape2.y + this.shape2.height * this.shape2.scaleY / 2
      }

      const dx = x2 - x1
      const dy = y2 - y1
      const angle = Math.atan2(-dy, dx)

      if (this.shape1.radius) {
        x1 = x1 + -this.shape1.radius * Math.cos(angle + Math.PI)
        y1 = y1 + this.shape1.radius * Math.sin(angle + Math.PI)
      }

      if (this.shape2.radius) {
        x2 = x2 + -this.shape2.radius * Math.cos(angle)
        y2 = y2 + this.shape2.radius * Math.sin(angle)
      }

      return [x1, y1, x2, y2]
    }
  }
}
</script>
