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
  data () {
    return {
      image: null
    }
  },
  computed: {
    // imageConfig () {
    //   const config = { ...this.config }
    //   // config.image = this.image

    //   // config.crop = { ...this.crop }
    //   // if (this.crop === null) {
    //   //   config.cropWidth = null
    //   //   config.cropHeight = null
    //   //   config.cropCropX = null
    //   //   config.cropCropY = null
    //   // }
    //   return config
    // },
    // crop () {
    //   if (_.isNull(this.image)) {
    //     return null
    //   }
    //   const width = this.image.width * this.config.scaleX
    //   const height = this.image.height * this.config.scaleY
    //   const aspectRatio = width / height

    //   let newWidth
    //   let newHeight

    //   const imageRatio = this.image.width / this.image.height

    //   if (aspectRatio >= imageRatio) {
    //     newWidth = this.image.width
    //     newHeight = this.image.width / aspectRatio
    //   } else {
    //     newWidth = this.image.height * aspectRatio
    //     newHeight = this.image.height
    //   }

    //   let x = 0
    //   let y = 0

    //   if (this.config.cropType === 'leftTop') {
    //     x = 0
    //     y = 0
    //   } else if (this.config.cropType === 'leftMiddle') {
    //     x = 0
    //     y = (this.image.height - newHeight) / 2
    //   } else if (this.config.cropType === 'leftBottom') {
    //     x = 0
    //     y = this.image.height - newHeight
    //   } else if (this.config.cropType === 'centerTop') {
    //     x = (this.image.width - newWidth) / 2
    //     y = 0
    //   } else if (this.config.cropType === 'centerMiddle') {
    //     x = (this.image.width - newWidth) / 2
    //     y = (this.image.height - newHeight) / 2
    //   } else if (this.config.cropType === 'centerBottom') {
    //     x = (this.image.width - newWidth) / 2
    //     y = this.image.height - newHeight
    //   } else if (this.config.cropType === 'rightTop') {
    //     x = this.image.width - newWidth
    //     y = 0
    //   } else if (this.config.cropType === 'rightMiddle') {
    //     x = this.image.width - newWidth
    //     y = (this.image.height - newHeight) / 2
    //   } else if (this.config.cropType === 'rightBottom') {
    //     x = this.image.width - newWidth
    //     y = this.image.height - newHeight
    //   } else if (this.config.cropType === 'scale') {
    //     x = 0
    //     y = 0
    //     newWidth = width
    //     newHeight = height
    //   } else if (this.config.cropType === 'fit') {
    //     return null
    //   } else {
    //     console.error(
    //       new Error('Unknown clip position property - ' + this.config.cropType)
    //     )
    //   }

    //   return {
    //     x: x,
    //     y: y,
    //     width: newWidth,
    //     height: newHeight
    //   }
    // }
  },
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
  // watch: {
  //   config () {
  //     // console.log('load')
  //     // this.loadImage()
  //   }
  // },
  created () {
    this.loadImage()
  }
}
</script>
