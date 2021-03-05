<template lang="pug">
v-layer
  v-image(
    :config="config"
    @click="click"
  )
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('editor', [
      'backgroundImage',
      'stageConfig'
    ]),
    config () {
      return {
        image: this.image,
        backgroundImage: this.backgroundImage,
        width: this.stageConfig.width,
        height: this.stageConfig.height,
        type: 'Background'
      }
    }
  },
  data () {
    return {
      image: null
    }
  },
  watch: {
    backgroundImage () {
      this.loadImage()
    }
  },
  methods: {
    ...mapMutations('editor', [
      'setSelectedShape'
    ]),
    loadImage () {
      const image = new window.Image()
      image.src = this.backgroundImage
      image.onload = () => {
        this.image = image
        this.recrop(this.image, { width: 2000, height: 2000 })
      }
    },
    click (event) {
      if (event.evt.which === 1) {
        this.$emit('click', event)
        this.setSelectedShape('')
      }
    }
  }
}
</script>
