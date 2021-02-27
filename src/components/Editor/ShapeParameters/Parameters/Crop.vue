<script>
import Select from '../Parameters/Select'
import PropertyMixin from './ParametersMixin'

export default {
  mixins: [
    Select,
    PropertyMixin
  ],
  components: {
    Select
  },
  methods: {
    prepareConfig (config) {
      const imageWidth = config.width
      const imageHeight = config.height

      const width = imageWidth * config.scaleX
      const height = imageHeight * config.scaleY
      const aspectRatio = width / height

      let newWidth
      let newHeight

      const imageRatio = imageWidth / imageHeight

      if (aspectRatio >= imageRatio) {
        newWidth = imageWidth
        newHeight = imageWidth / aspectRatio
      } else {
        newWidth = imageHeight * aspectRatio
        newHeight = imageHeight
      }

      let x = 0
      let y = 0

      const cropType = config.cropType

      if (cropType === 'leftTop') {
        x = 0
        y = 0
      } else if (cropType === 'leftMiddle') {
        x = 0
        y = (imageHeight - newHeight) / 2
      } else if (cropType === 'leftBottom') {
        x = 0
        y = imageHeight - newHeight
      } else if (cropType === 'centerTop') {
        x = (imageWidth - newWidth) / 2
        y = 0
      } else if (cropType === 'centerMiddle') {
        x = (imageWidth - newWidth) / 2
        y = (imageHeight - newHeight) / 2
      } else if (cropType === 'centerBottom') {
        x = (imageWidth - newWidth) / 2
        y = imageHeight - newHeight
      } else if (cropType === 'rightTop') {
        x = imageWidth - newWidth
        y = 0
      } else if (cropType === 'rightMiddle') {
        x = imageWidth - newWidth
        y = (imageHeight - newHeight) / 2
      } else if (cropType === 'rightBottom') {
        x = imageWidth - newWidth
        y = imageHeight - newHeight
      } else if (cropType === 'scale') {
        x = 0
        y = 0
        newWidth = width
        newHeight = height
      } else if (cropType === 'fit') {
        x = null
        y = null
        newWidth = null
        newHeight = null
      } else {
        console.error(
          new Error('Unknown clip position property - ' + this.config.cropType)
        )
      }

      const crop = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
      }

      if (crop === null) {
        config.cropWidth = null
        config.cropHeight = null
        config.cropCropX = null
        config.cropCropY = null
      }

      config.cropWidth = crop.height
      config.cropHeight = crop.width
      config.cropCropX = crop.x
      config.cropCropY = crop.y

      config.crop = crop
      return config
    }
  }
}
</script>
