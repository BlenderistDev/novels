<template lang="pug">
div
  Common
  div width
    Number(propName="width")
  div height
    Number(propName="height")
  Fill
  div numPoints
    NumberSlider(propName="numPoints" max="50")
  DoubleRadius
</template>

<script>
import Common from './ParameterGroups/Common'
import Fill from './ParameterGroups/Fill'
import DoubleRadius from './ParameterGroups/DoubleRadius'
import NumberSlider from './Parameters/NumberSlider'
import Number from './Parameters/Number'

export default {
  components: {
    Common,
    Fill,
    DoubleRadius,
    NumberSlider,
    Number
  }
}
</script>
