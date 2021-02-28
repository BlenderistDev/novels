<template lang="pug">
div
  Common
  Stroke
  Src
  Crop
  ImageFilter
</template>

<script>
import Common from './ParameterGroups/Common'
import Stroke from './ParameterGroups/Stroke'
import Crop from './ParameterGroups/Crop'
import Src from './ParameterGroups/Src'
import ImageFilter from './ParameterGroups/ImageFilter'

export default {
  components: {
    Stroke,
    Common,
    Src,
    Crop,
    ImageFilter
  }
}
</script>
