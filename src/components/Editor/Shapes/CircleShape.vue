<template lang="pug">
v-circle(
  :config="config"
  @mousedown="$emit('mousedown', $event)"
  @touchstart="$emit('mousedown', $event)"
  @transformend="$emit('transformend', $event)"
  @dragmove="updateShape({...$event.target.attrs})"
)
</template>

<script>
import UpdateShapeMixin from './UpdateShapeMixin'

export default {
  mixins: [UpdateShapeMixin]
}
</script>
