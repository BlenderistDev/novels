<template lang="pug">
v-group(
  :config="config"
  @mousedown="$emit('mousedown', $event)"
  @touchstart="$emit('mousedown', $event)"
  @transformend="$emit('transformend', $event)"
  @dragmove="updateShape({...$event.target.attrs})"
)
  Shape(
    v-for="(shape, index) in shapeList"
    :key="index"
    :shapeName="shape.name"
  )
</template>

<script>
import UpdateShapeMixin from './UpdateShapeMixin'
import Shape from './Shape'

export default {
  mixins: [UpdateShapeMixin],
  components: {
    Shape
  },
  computed: {
    shapeList () {
      return this.config.shapes
    }
  }
}
</script>
