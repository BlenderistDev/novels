<template lang="pug">
div
  Common
  Radius
  Fill
  Stroke
</template>

<script>
import Common from './ParameterGroups/Common'
import Stroke from './ParameterGroups/Stroke'
import Fill from './ParameterGroups/Fill'
import Radius from './ParameterGroups/Radius'

export default {
  components: {
    Fill,
    Common,
    Stroke,
    Radius
  }
}
</script>
