<template lang="pug">
v-image(
  :config="config"
  @dragmove="updateShapeFromEvent"
  @mousedown="$emit('mousedown', $event)"
  @touchstart="$emit('mousedown', $event)"
  @transformend="$emit('transformend', $event)"
)
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
// import _ from 'lodash'

export default {
  props: {
    config: Object
  },
  methods: {
    ...mapMutations('editor', [
      'addShape',
      'updateShape'
    ]),
    ...mapActions('editor', [
      'updateShapeFromEvent'
    ]),
    loadImage () {
      const image = new window.Image()
      image.src = this.config.src
      image.onload = () => {
        const config = { ...this.config }
        config.image = image
        config.width = image.width
        config.height = image.height
        this.updateShape(config)
      }
    }
  },
  computed: {
    image () {
      return this.config.image
    }
  },
  created () {
    this.loadImage()
  }
}
</script>
