<template lang="pug">
div
  Common
  Stroke
  Src
  Crop
  ImageFilter
  FillFilter
</template>

<script>
import Common from './ParameterGroups/Common'
import Stroke from './ParameterGroups/Stroke'
import Crop from './ParameterGroups/Crop'
import Src from './ParameterGroups/Src'
import ImageFilter from './ParameterGroups/ImageFilter'
import FillFilter from './ParameterGroups/FillFilter'

export default {
  components: {
    Stroke,
    Common,
    Src,
    Crop,
    ImageFilter,
    FillFilter
  }
}
</script>
