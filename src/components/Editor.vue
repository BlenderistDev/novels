<template lang="pug">
div
  span {{circleList}}
  ShapesBar
  v-stage(
    ref="stage"
    :config="configKonva"
    @mousedown="hideTransform"
    @touchstart="hideTransform"
  )
    v-layer(rel="layer")
      shape(
        v-for="(circle, index) in circleList"
        :key="index"
        :shape="circle"
        @mousedown="handleStageMouseDown"
        @touchstart="handleStageMouseDown"
        @transformend="circleUpdate"
      )
      v-transformer(ref="transformer")
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ShapesBar from './ShapesBar'
import Shape from './Shape'

export default {
  components: {
    Shape,
    ShapesBar
  },
  data () {
    return {
      configKonva: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  },
  computed: {
    ...mapState('editor', [
      'circleList'
    ])
  },
  methods: {
    ...mapMutations('editor', [
      'circleUpdate'
    ]),
    handleStageMouseDown (e) {
      const clickedOnTransformer = e.target.getParent().className === 'Transformer'
      if (clickedOnTransformer) {
        return
      }
      this.updateTransformer(e.target)
    },
    updateTransformer (target) {
      const transformerNode = this.$refs.transformer.getNode()
      const stage = transformerNode.getStage()
      const selectedNode = stage.findOne('.' + target.name())

      if (selectedNode) {
        transformerNode.nodes([selectedNode])
      }
      // лимитирует перерисовку
      transformerNode.getLayer().batchDraw()
    },
    hideTransform (e) {
      if (e.target === e.target.getStage()) {
        const transformerNode = this.$refs.transformer.getNode()
        transformerNode.nodes([])
      }
    }
  }
}
</script>
