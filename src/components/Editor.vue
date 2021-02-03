<template lang="pug">
div
  span {{circleList}}
  span(@click="addCNewCircle") Круг
  v-stage(
    ref="stage"
    :config="configKonva"
    @mousedown="hideTransform"
    @touchstart="hideTransform"
  )
    v-layer(rel="layer")
      v-circle(
        v-for="(circle, index) in circleList"
        :key="index"
        :config="circle"
        @dragmove="circleUpdate"
        @mousedown="handleStageMouseDown"
        @touchstart="handleStageMouseDown"
        @transformend="circleUpdate"
      )
      v-transformer(ref="transformer")
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      configKonva: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      configCircle: {
        x: 200,
        y: 200,
        scaleX: 1,
        scaleY: 1,
        radius: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
        name: 'circle'
      }
    }
  },
  computed: {
    ...mapState('editor', [
      'circleList',
      'textList',
      'imageList'
    ])
  },
  methods: {
    ...mapMutations('editor', [
      'addCircle',
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

      if (selectedNode === transformerNode.node()) {
        return
      }

      if (selectedNode) {
        // attach to another node
        transformerNode.nodes([selectedNode])
      } else {
        // remove transformer
        transformerNode.nodes([])
      }
      transformerNode.getLayer().batchDraw()
    },
    dragmove (e) {
      this.updateCircle({
        index: e.target.index,
        attrs: e.target.attrs
      })
    },
    addCNewCircle () {
      const circleConfig = { ...this.configCircle }
      circleConfig.name = circleConfig.name + Date.now()
      this.addCircle(circleConfig)
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
