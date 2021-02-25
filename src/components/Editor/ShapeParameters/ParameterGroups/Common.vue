<template lang="pug">
div
  div Title
    String(propName="Title")
  div x
    Number(propName="x")
  div y
    Number(propName="x")
  div ScaleX
    Number(propName="scaleX")
  div ScaleY
    Number(propName="scaleY")
  div Rotation
    Number(propName="rotation")
</template>

<script>
import String from '../Parameters/String'
import Number from '../Parameters/Number'

export default {
  components: {
    String,
    Number
  }
}
</script>
