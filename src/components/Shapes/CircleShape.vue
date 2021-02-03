<template lang="pug">
v-circle(
  :config="config"
  @dragmove="circleUpdate"
  @mousedown="$emit('mousedown', $event)"
  @touchstart="$emit('mousedown', $event)"
  @transformend="$emit('transformend', $event)"
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
      'addCircle',
      'circleUpdate'
    ])
  }
}
</script>
