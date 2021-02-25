<template lang="pug">
div
  Crop(
    :list="cropTypes"
    propName="cropType"
  )
</template>

<script>
import Select from '../Parameters/Select'
import Crop from '../Parameters/Crop'

export default {
  components: {
    Select,
    Crop
  },
  data () {
    return {
      cropTypes: [
        'leftTop',
        'centerTop',
        'rightTop',
        'leftMiddle',
        'centerMiddle',
        'rightMiddle',
        'leftBottom',
        'centerBottom',
        'rightBottom',
        'scale',
        'fit'
      ]
    }
  }
}
</script>
