<template lang="pug">
  span
    v-text(
      :config="config"
      @mousedown="$emit('mousedown', $event)"
      @touchstart="$emit('mousedown', $event)"
      @transformend="$emit('transformend', $event)"
      @dragmove="updateShape"
      @dblclick="showEditor"
    )
</template>

<script>
import { mapMutations } from 'vuex'
import { VueEditor } from 'vue2-editor'

export default {
  components: {
    VueEditor
  },
  data () {
    return {
      content: ''
    }
  },
  props: {
    config: Object
  },
  methods: {
    ...mapMutations('editor', [
      'updateShape',
      'showEditor',
      'hideEditor'
    ])
  }
}
</script>
