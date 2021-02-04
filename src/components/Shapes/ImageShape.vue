<template lang="pug">
v-image(
  :config="imageConfig"
  @dragmove="updateShape"
  @mousedown="$emit('mousedown', $event)"
  @touchstart="$emit('mousedown', $event)"
  @transformend="$emit('transformend', $event)"
)
</template>

<script>
import { mapMutations } from 'vuex'

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
      'addShape',
      'updateShape'
    ])
  },
  created () {
    const image = new window.Image()
    image.src = this.config.src
    image.onload = () => {
      this.image = image
    }
  }
}
</script>
