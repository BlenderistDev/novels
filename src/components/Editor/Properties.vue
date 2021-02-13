<template lang="pug">
component(
  v-if="selectedShape.type"
  :is="shapeComponent"
  :config="selectedShape"
)
</template>

<script>
import { mapState } from 'vuex'
import StageParameters from './ShapeParameters/StageParameters'
import CircleParameters from './ShapeParameters/CircleParameters'

export default {
  components: {
    StageParameters,
    CircleParameters
  },
  computed: {
    ...mapState('editor', [
      'selectedShape'
    ]),
    shapeComponent () {
      return `${this.selectedShape.type}Parameters`
    }
  }
}
</script>
