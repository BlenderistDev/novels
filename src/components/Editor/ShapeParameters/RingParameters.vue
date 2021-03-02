<template lang="pug">
div
  Common
  Fill
  Stroke
  DoubleRadius
</template>

<script>
import Common from './ParameterGroups/Common'
import Stroke from './ParameterGroups/Stroke'
import Fill from './ParameterGroups/Fill'
import DoubleRadius from './ParameterGroups/DoubleRadius'

export default {
  components: {
    DoubleRadius,
    Common,
    Stroke,
    Fill
  }
}
</script>
