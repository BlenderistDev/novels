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
      Transformer(ref="transformer")
  Wysiwyg
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ShapesBar from './ShapesBar'
import Shape from './Shape'
import Wysiwyg from './Wysiwyg'
import Transformer from './Transformer'

export default {
  components: {
    Shape,
    ShapesBar,
    Wysiwyg,
    Transformer
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
      'shapeList'
    ])
  },
  methods: {
    ...mapMutations('editor', [
      'updateShape'
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
