<template lang="pug">
v-image(
  :config="imageConfig"
  @dragmove="updateShapeFromEvent"
  @mousedown="$emit('mousedown', $event)"
  @touchstart="$emit('mousedown', $event)"
  @transformend="$emit('transformend', $event)"
)
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      image: null
    }
  },
  computed: {
    imageConfig () {
      const config = { ...this.config }
      config.image = this.image
      return config
    }
  },
  props: {
    config: Object
  },
  methods: {
    ...mapMutations('editor', [
      'addShape'
    ]),
    ...mapActions('editor', [
      'updateShapeFromEvent'
    ]),
    loadImage () {
      const image = new window.Image()
      image.src = this.config.src
      image.onload = () => {
        this.image = image
      }
    }
  },
  watch: {
    config () {
      this.loadImage()
    }
  },
  created () {
    this.loadImage()
  }
}
</script>
