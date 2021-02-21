<template lang="pug">
div
  ShapesBar
  .row
    .col-3#props-bar
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
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ShapesBar from './ShapesBar'
import Shape from './Shape'
import Transformer from './Transformer'
import Properties from './Properties'
import Background from './Background'

export default {
  components: {
    Shape,
    ShapesBar,
    Transformer,
    Properties,
    Background
  },
  created () {
    this.setStageConfig(this.getStageConfig())
    window.addEventListener('resize', () => {
      this.setStageConfig(this.getStageConfig())
    })
  },
  computed: {
    ...mapState('editor', [
      'shapeList',
      'stageConfig'
    ])
  },
  methods: {
    ...mapMutations('editor', [
      'setStageConfig'
    ]),
    getStageConfig () {
      const propsBar = document.getElementById('props-bar')
      let width = window.innerWidth
      if (propsBar !== null) {
        width = width - document.getElementById('props-bar').offsetWidth
      }
      return {
        width: width,
        height: window.innerHeight,
        type: 'Stage'
      }
    }
  }
}
</script>

<style scoped>
.col-3 {
  background-color: beige;
  max-width: 300px;
}
</style>
