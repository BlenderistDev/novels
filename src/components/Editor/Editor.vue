<template lang="pug">
div
  ShapesBar
  .row
    .col-3
      Properties
    .col-6
      v-stage(:config="stageConfig")
        Background
        v-layer
          shape(
            v-for="(shape, index) in shapeList"
            :key="index"
            :shapeName="shape.name"
          )
          Transformer
  Wysiwyg
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ShapesBar from './ShapesBar'
import Shape from './Shape'
import Wysiwyg from './Wysiwyg'
import Transformer from './Transformer'
import Properties from './Properties'
import Background from './Background'

export default {
  components: {
    Shape,
    ShapesBar,
    Wysiwyg,
    Transformer,
    Properties,
    Background
  },
  created () {
    this.setStageConfig(this.configKonva)
    this.setSelectedShape('')
  },
  computed: {
    ...mapState('editor', [
      'shapeList',
      'stageConfig'
    ]),
    configKonva () {
      return {
        width: window.innerWidth * 0.7,
        height: window.innerHeight,
        type: 'Stage'
      }
    }
  },
  methods: {
    ...mapMutations('editor', [
      'setStageConfig',
      'setSelectedShape'
    ])
  }
}
</script>

<style scoped>
.col-3 {
  background-color: beige;
}
</style>
