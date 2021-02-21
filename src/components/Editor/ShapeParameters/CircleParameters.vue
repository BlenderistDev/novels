<template lang="pug">
div
  Title
  Coordinates
  Scale
  Radius
  Fill
  Stroke
</template>

<script>
import Coordinates from './ParameterGroups/Coordinates'
import Scale from './ParameterGroups/Scale'
import Stroke from './ParameterGroups/Stroke'
import Title from './ParameterGroups/Title'
import Fill from './ParameterGroups/Fill'
import Radius from './ParameterGroups/Radius'

import Number from './Parameters/Number'

export default {
  components: {
    Fill,
    Number,
    Coordinates,
    Scale,
    Stroke,
    Title,
    Radius
  }
}
</script>
