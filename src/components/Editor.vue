<template lang="pug">
div
  span {{circleList}}
  span(@click="addCNewCircle") Круг
  v-stage(
    ref="stage"
    :config="configKonva"
  )
    //-   @mousedown="handleStageMouseDown"
    //- @touchstart="handleStageMouseDown"
    v-layer(rel="layer")
      v-circle(
        v-for="(circle, index) in circleList"
        :key="index"
        :config="circle"

        @dragend="circleDragStop"
        @dragstart="circleDragStart"
        @dragmove="circleUpdate"
      )
              //- @dragmove="dragmove"
              //- @transformend="handleTransformEnd"
      //- v-text(:config="text")
      //- v-transformer(ref="transformer")
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
      // text: [],
      // circle: [],
      configCircle: {
        x: 200,
        y: 200,
        scaleX: 1,
        scaleY: 1,
        radius: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
        // name: 'circle'
      }
    }
  },
  computed: {
    ...mapState('editor', [
      'circleList',
      'textList',
      'imageList'
    ])
    // text: function () {
    //   return {
    //     text: `
    //       x: ${this.configCircle.x}
    //       y: ${this.configCircle.y}
    //       scaleX: ${this.configCircle.scaleX}
    //       scaleY: ${this.configCircle.scaleY}
    //       radius: ${this.configCircle.radius}
    //     `,
    //     x: this.configCircle.x - this.configCircle.radius,
    //     y: this.configCircle.y + this.configCircle.radius
    //   }
    // }
  },
  methods: {
    ...mapMutations('editor', [
      'addCircle',
      'circleUpdate',
      'circleDragStart',
      'circleDragStop'
    ]),
    // handleTransformEnd (e) {
    //   this.configCircle.x = e.target.x()
    //   this.configCircle.y = e.target.y()
    //   this.configCircle.rotation = e.target.rotation()
    //   this.configCircle.scaleX = e.target.scaleX()
    //   this.configCircle.scaleY = e.target.scaleY()
    // },
    handleStageMouseDown (e) {
      // if (e.target === e.target.getStage()) {
      //   const transformerNode = this.$refs.transformer.getNode()
      //   transformerNode.nodes([])
      //   // this.updateTransformer()
      //   return
      // }
      // const clickedOnTransformer = e.target.getParent().className === 'Transformer'
      // if (clickedOnTransformer) {
      //   return
      // }
      // this.updateTransformer()
    },
    // updateTransformer () {
    //   const transformerNode = this.$refs.transformer.getNode()
    //   const stage = transformerNode.getStage()

    //   const selectedNode = stage.findOne('.' + 'circle')

    //   if (selectedNode === transformerNode.node()) {
    //     return
    //   }

    //   if (selectedNode) {
    //     // attach to another node
    //     transformerNode.nodes([selectedNode])
    //   } else {
    //     // remove transformer
    //     transformerNode.nodes([])
    //   }
    //   transformerNode.getLayer().batchDraw()
    // },
    dragmove (e) {
      this.updateCircle({
        index: e.target.index,
        attrs: e.target.attrs
      })
    },
    addCNewCircle () {
      const circleConfig = { ...this.configCircle }
      this.addCircle(circleConfig)
    }
  }
}
</script>
