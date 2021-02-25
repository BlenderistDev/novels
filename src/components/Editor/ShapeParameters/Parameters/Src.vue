<script>
import String from 'components/Editor/ShapeParameters/Parameters/String'

export default {
  mixins: [
    String
  ],
  methods: {
    saveConfig (config) {
      const image = new window.Image()
      image.src = config.src
      image.onload = () => {
        config.image = image
        config.width = image.width
        config.height = image.height
        config.scaleX = 1
        config.scaleY = 1
        this.updateShape(config)
      }
    }
  }
}
</script>
