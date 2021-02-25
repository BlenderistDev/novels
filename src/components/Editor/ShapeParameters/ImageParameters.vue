<template lang="pug">
div
  Common
  Stroke
  Src
  Crop
</template>

<script>
import Common from './ParameterGroups/Common'
import Stroke from './ParameterGroups/Stroke'
import Crop from './ParameterGroups/Crop'
import Src from './ParameterGroups/Src'

export default {
  components: {
    Stroke,
    Common,
    Src,
    Crop
  }
}
</script>
