<template lang="pug">
div
  Title
  Coordinates
  div width
    Number(propName="width")
  div height
    Number(propName="height")
  Scale
  div Radius
    Number(propName="radius")
  Fill
  Stroke
  div numPoints
    NumberSlider(propName="numPoints" max="50")
  DoubleRaduis
</template>

<script>
import Coordinates from './ParameterGroups/Coordinates'
import Scale from './ParameterGroups/Scale'
import Stroke from './ParameterGroups/Stroke'
import Title from './ParameterGroups/Title'
import Fill from './ParameterGroups/Fill'
import DoubleRadius from './ParameterGroups/DoubleRadius'
import NumberSlider from './Parameters/NumberSlider'
import Number from './Parameters/Number'

export default {
  components: {
    Coordinates,
    Scale,
    Stroke,
    Title,
    Fill,
    DoubleRadius,
    NumberSlider,
    Number
  }
}
</script>
