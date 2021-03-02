<template lang="pug">
div
  Common
  Fill
  ShapeConnect
</template>

<script>
import Common from './ParameterGroups/Common'
import Fill from './ParameterGroups/Fill'
import ShapeConnect from './ParameterGroups/ShapeConnect'

export default {
  components: {
    Fill,
    Common,
    ShapeConnect
  }
}
</script>
