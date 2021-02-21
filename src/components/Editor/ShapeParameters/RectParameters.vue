<template lang="pug">
div
  Title
  Coordinates
  div width
    Number(propName="width")
  div height
    Number(propName="height")
  Scale
  Fill
  Stroke
</template>

<script>
import Coordinates from './ParameterGroups/Coordinates'
import Scale from './ParameterGroups/Scale'
import Stroke from './ParameterGroups/Stroke'
import Title from './ParameterGroups/Title'
import Fill from './ParameterGroups/Fill'
import Number from './Parameters/Number'

export default {
  components: {
    Coordinates,
    Scale,
    Stroke,
    Fill,
    Title,
    Number
  }
}
</script>
