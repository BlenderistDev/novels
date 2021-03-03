<template lang="pug">
div
  ShapesBar
  .row
    .col-3#props-bar
      Properties
    .col-6
      v-stage(:config="stageConfig" @contextmenu="showContext($event)" ref="stage")
        Background(@click="click")
        v-layer
          shape(
            v-for="(shape, index) in shapeList"
            :key="index"
            :shapeName="shape.name"
          )
          Transformer
  Context(ref="context")
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ShapesBar from './ShapesBar'
import Shape from './Shape'
import Transformer from './Transformer'
import Properties from './Properties'
import Background from './Background'
import Context from './Context/Context'

export default {
  components: {
    Shape,
    ShapesBar,
    Transformer,
    Properties,
    Background,
    Context
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
    },
    showContext (event) {
      event.evt.preventDefault()
      this.$refs.context.open(event, this.$refs.stage.getNode())
    },
    click (event) {
      this.$refs.context.hide()
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
