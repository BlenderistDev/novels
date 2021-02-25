<template lang="pug">
div
  Common
  Radius
  Fill
  Stroke
  DoubleRadius
</template>

<script>
import Common from './ParameterGroups/Common'
import Stroke from './ParameterGroups/Stroke'
import Fill from './ParameterGroups/Fill'
import DoubleRadius from './ParameterGroups/DoubleRadius'
import Radius from './ParameterGroups/Radius'

export default {
  components: {
    DoubleRadius,
    Radius,
    Common,
    Stroke,
    Fill
  }
}
</script>
