<template lang="pug">
div
  ShapesBar
  span {{shapeList}}
  v-stage(
    ref="stage"
    :config="configKonva"
    @mousedown="hideTransform"
    @touchstart="hideTransform"
  )
    v-layer(rel="layer")
      shape(
        v-for="(circle, index) in shapeList"
        :key="index"
        :shape="circle"
        @mousedown="handleStageMouseDown"
        @touchstart="handleStageMouseDown"
        @transformend="updateShape"
      )
      v-transformer(ref="transformer")
  Wysiwyg
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ShapesBar from './ShapesBar'
import Shape from './Shape'
import Wysiwyg from './Wysiwyg'

export default {
  components: {
    Shape,
    ShapesBar,
    Wysiwyg
  },
  data () {
    return {
      configKonva: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      content: ''
    }
  },
  computed: {
    ...mapState('editor', [
      'shapeList',
      'showEditor'
    ])
  },
  methods: {
    ...mapMutations('editor', [
      'updateShape'
    ]),
    handleStageMouseDown (e) {
      if (e.target.getParent().className === 'Transformer') {
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
