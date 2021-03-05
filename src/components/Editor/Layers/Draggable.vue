<template lang="pug">
v-layer
  Shape(
    v-for="(shape, index) in shapeList"
    :key="index"
    :shapeName="shape.name"
  )
  Transformer
</template>

<script>
import { mapState } from 'vuex'
import Transformer from '../Transformer'
import Shape from '../Shape'

export default {
  components: {
    Transformer,
    Shape
  },
  computed: {
    ...mapState('editor', [
      'shapeList'
    ])
  }
}
</script>
