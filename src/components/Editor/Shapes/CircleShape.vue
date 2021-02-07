<template lang="pug">
v-circle(
  :config="config"
  @mousedown="$emit('mousedown', $event)"
  @touchstart="$emit('mousedown', $event)"
  @transformend="$emit('transformend', $event)"
  @dragmove="updateShape"
)
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    config: Object
  },
  methods: {
    ...mapMutations('editor', [
      'updateShape'
    ])
  }
}
</script>
