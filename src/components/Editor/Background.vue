<template lang="pug">
v-layer
  v-image(
    :config="config"
  )
</template>

<script>
import { mapState } from 'vuex'

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
        // crop: this.crop,
        // cropX: this.crop.cropX,
        // cropY: this.crop.cropY,
        // cropWidth: this.crop.cropWidth,
        // cropHeight: this.crop.cropHeight,
        width: this.stageConfig.width,
        height: this.stageConfig.height
      }
    }
  },
  data () {
    return {
      image: null
      // crop: {
      //   cropX: null,
      //   cropY: null,
      //   cropWidth: null,
      //   cropHeight: null
      // }
    }
  },
  watch: {
    backgroundImage () {
      this.loadImage()
    }
  },
  methods: {
    loadImage () {
      const image = new window.Image()
      image.src = this.backgroundImage
      image.onload = () => {
        this.image = image
        this.recrop(this.image, { width: 2000, height: 2000 })
      }
    }
    // recrop (image, size, clipPosition = 'center-middle') {
    //   const width = size.width
    //   const height = size.height
    //   const aspectRatio = width / height

    //   let newWidth
    //   let newHeight

    //   const imageRatio = image.width / image.height

    //   if (aspectRatio >= imageRatio) {
    //     newWidth = image.width
    //     newHeight = image.width / aspectRatio
    //   } else {
    //     newWidth = image.height * aspectRatio
    //     newHeight = image.height
    //   }

    //   let x = 0
    //   let y = 0
    //   if (clipPosition === 'left-top') {
    //     x = 0
    //     y = 0
    //   } else if (clipPosition === 'left-middle') {
    //     x = 0
    //     y = (image.height - newHeight) / 2
    //   } else if (clipPosition === 'left-bottom') {
    //     x = 0
    //     y = image.height - newHeight
    //   } else if (clipPosition === 'center-top') {
    //     x = (image.width - newWidth) / 2
    //     y = 0
    //   } else if (clipPosition === 'center-middle') {
    //     x = (image.width - newWidth) / 2
    //     y = (image.height - newHeight) / 2
    //   } else if (clipPosition === 'center-bottom') {
    //     x = (image.width - newWidth) / 2
    //     y = image.height - newHeight
    //   } else if (clipPosition === 'right-top') {
    //     x = image.width - newWidth
    //     y = 0
    //   } else if (clipPosition === 'right-middle') {
    //     x = image.width - newWidth
    //     y = (image.height - newHeight) / 2
    //   } else if (clipPosition === 'right-bottom') {
    //     x = image.width - newWidth
    //     y = image.height - newHeight
    //   } else if (clipPosition === 'scale') {
    //     x = 0
    //     y = 0
    //     newWidth = width
    //     newHeight = height
    //   } else {
    //     console.error(
    //       new Error('Unknown clip position property - ' + clipPosition)
    //     )
    //   }

    //   this.crop = {
    //     cropX: x,
    //     cropY: y,
    //     cropWidth: newWidth,
    //     cropHeight: newHeight
    //   }
    // }
  }
}
</script>
