<template lang="pug">
div
  ShapesBar
  .row
    .col-3#props-bar
      Properties
    .col-6
      v-stage(:config="stageConfig" @contextmenu="showContext($event)" ref="stage")
        Background(@click="click")
        Draggable
  Context(ref="context")
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ShapesBar from './ShapesBar'
import Properties from './Properties'
import Background from './Layers/Background'
import Draggable from './Layers/Draggable'
import Context from './Context/Context'

export default {
  components: {
    ShapesBar,
    Properties,
    Background,
    Context,
    Draggable
  },
  created () {
    this.setStageConfig(this.getStageConfig())
    window.addEventListener('resize', () => {
      this.setStageConfig(this.getStageConfig())
    })
  },
  computed: {
    ...mapState('editor', [
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
  max-height: 100vh;
  overflow-y: auto;
  padding: 10px 20px;
}
</style>
