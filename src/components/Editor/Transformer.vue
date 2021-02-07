<template lang="pug">
v-transformer(ref="transformer")
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('editor', [
      'updateShape',
      'hideWysiwyg'
    ]),
    updateTransformer (event) {
      const transformerNode = this.$refs.transformer.getNode()
      const stage = transformerNode.getStage()
      const selectedNode = stage.findOne('.' + event.target.name())
      if (selectedNode.attrs.type !== 'Text') {
        this.hideWysiwyg()
      }
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
        this.hideWysiwyg()
      }
    }
  }
}
</script>
