<template lang="pug">
component(
  :is="shapeComponent"
  :config="shape"
)
</template>

<script>
import StageParameters from './ShapeParameters/StageParameters'

export default {
  components: {
    StageParameters
  },
  props: {
    shape: Object
  },
  computed: {
    shapeComponent () {
      return `${this.shape.type}Parameters`
    }
  }
}
</script>
