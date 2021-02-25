<template lang="pug">
div
  Title
  Coordinates
  Scale
  Stroke
  Src
  Crop
</template>

<script>
import Coordinates from './ParameterGroups/Coordinates'
import Scale from './ParameterGroups/Scale'
import Stroke from './ParameterGroups/Stroke'
import Title from './ParameterGroups/Title'
import String from './Parameters/String'
import Crop from './ParameterGroups/Crop'
import Src from './ParameterGroups/Src'

export default {
  components: {
    Title,
    Stroke,
    Scale,
    Coordinates,
    String,
    Src,
    Crop
  }
}
</script>
