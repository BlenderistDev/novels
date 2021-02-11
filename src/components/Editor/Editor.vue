<template lang="pug">
div
  ShapesBar
  .row
    .col-3
      Properties(:shape="stageConfig")
    .col-6
      v-stage(
        :config="stageConfig"
        @mousedown="hideTransform"
        @touchstart="hideTransform"
      )
        Background
        v-layer(rel="layer")
          shape(
            v-for="(circle, index) in shapeList"
            :key="index"
            :shape="circle"
            @mousedown="handleStageMouseDown"
            @touchstart="handleStageMouseDown"
            @transformend="updateShape"
          )
          Transformer(ref="transformer")
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
      'updateShape',
      'setStageConfig'
    ]),
    handleStageMouseDown (event) {
      if (event.target.getParent().className !== 'Transformer') {
        this.$refs.transformer.updateTransformer(event)
      }
    },
    hideTransform (event) {
      this.$refs.transformer.hideTransform(event)
    }
  }
}
</script>

<style scoped>
.col-3 {
  background-color: beige;
}
</style>
