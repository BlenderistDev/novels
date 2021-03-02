<template lang="pug">
div
  Common
  Src
  Crop
  FillFilter
</template>

<script>
import Common from './ParameterGroups/Common'
import Crop from './ParameterGroups/Crop'
import Src from './ParameterGroups/Src'
import FillFilter from './ParameterGroups/FillFilter'

export default {
  components: {
    Common,
    Src,
    Crop,
    FillFilter
  }
}
</script>
