<template lang="pug">
div
  Common
  Fill
  Stroke
  ShapeConnect
</template>

<script>
import Common from './ParameterGroups/Common'
import Stroke from './ParameterGroups/Stroke'
import Fill from './ParameterGroups/Fill'
import ShapeConnect from './ParameterGroups/ShapeConnect'

export default {
  components: {
    Fill,
    Common,
    Stroke,
    ShapeConnect
  }
}
</script>
