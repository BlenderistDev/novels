<template lang="pug">
v-transformer(ref="transformer")
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  watch: {
    selectedShape: function () {
      if (this.selectedShape && this.selectedShape.type !== 'Stage') {
        this.updateTransformer()
      } else {
        this.hideTransform()
      }
    }
  },
  methods: {
    ...mapMutations('editor', [
      'hideWysiwyg',
      'setSelectedShape'
    ]),
    updateTransformer () {
      const transformerNode = this.$refs.transformer.getNode()
      const stage = transformerNode.getStage()
      const selectedNode = stage.findOne('.' + this.selectedShape.name)

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
      const transformerNode = this.$refs.transformer.getNode()
      transformerNode.nodes([])
      this.hideWysiwyg()
      this.setSelectedShape(this.stageConfig)
    }
  },
  computed: {
    ...mapState('editor', [
      'stageConfig',
      'selectedShape'
    ])
  }
}
</script>
