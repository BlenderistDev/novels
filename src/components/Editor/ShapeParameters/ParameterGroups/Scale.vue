<template lang="pug">
div
  div ScaleX
    Number(propName="scaleX")
  div ScaleY
    Number(propName="scaleY")
  div Rotation
    Number(propName="rotation")
</template>

<script>
import Number from '../Parameters/Number'

export default {
  components: {
    Number
  }
}
</script>
