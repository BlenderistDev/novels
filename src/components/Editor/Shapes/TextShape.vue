<template lang="pug">
  v-image(
    :config="config"
    @mousedown="click($event)"
    @touchstart="click($event)"
    @transformend="$emit('transformend', $event)"
    @dragmove="updateShapeFromEvent"
  )
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { VueEditor } from 'vue2-editor'

export default {
  components: {
    VueEditor
  },
  props: {
    config: Object
  },
  methods: {
    ...mapMutations('editor', [
      'showWysiwyg',
      'hideWysiwyg'
    ]),
    ...mapActions('editor', [
      'updateShapeFromEvent'
    ]),
    click (event) {
      this.showWysiwyg({
        event: event,
        content: this.config.text
      })
      this.$emit('mousedown', event)
    }
  }
}
</script>
