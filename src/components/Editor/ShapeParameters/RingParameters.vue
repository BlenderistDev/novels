<template lang="pug">
div
  Title
  Coordinates
  Scale
  Radius
  Fill
  Stroke
  DoubleRadius
</template>

<script>
import Coordinates from './ParameterGroups/Coordinates'
import Scale from './ParameterGroups/Scale'
import Stroke from './ParameterGroups/Stroke'
import Title from './ParameterGroups/Title'
import Fill from './ParameterGroups/Fill'
import DoubleRadius from './ParameterGroups/DoubleRadius'
import Radius from './ParameterGroups/Radius'

export default {
  components: {
    DoubleRadius,
    Radius,
    Coordinates,
    Scale,
    Stroke,
    Title,
    Fill
  }
}
</script>
