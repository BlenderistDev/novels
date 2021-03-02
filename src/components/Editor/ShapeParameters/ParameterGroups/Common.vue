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
  div stroke
    Color(propName="stroke")
  div strokeWidth
    NumberSlider(propName="strokeWidth")
</template>

<script>
import String from '../Parameters/String'
import Number from '../Parameters/Number'
import Color from '../Parameters/Color'
import NumberSlider from '../Parameters/NumberSlider'

export default {
  components: {
    String,
    Number,
    Color,
    NumberSlider
  }
}
</script>
