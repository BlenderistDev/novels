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

export default {
  components: {
    StageParameters,
    CircleParameters,
    ImageParameters,
    TextParameters
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
