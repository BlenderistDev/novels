<template lang="pug">
  v-text(
    v-if="!isEditing"
    :config="config"
    @mousedown="$emit('mousedown', $event)"
    @dblclick="edit($event)"
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
