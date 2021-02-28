<template lang="pug">
div
  ShapeSelect(
    propName="shape1"
  )
  ShapeSelect(
    propName="shape2"
  )
</template>

<script>
import ShapeSelect from '../Parameters/ShapeSelect'

export default {
  components: {
    ShapeSelect
  }
}
</script>
