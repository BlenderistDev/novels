<template lang="pug">
div
  div Title
    String(propName="Title")
  div x
    Number(propName="x")
  div y
    Number(propName="y")
  div width
    Number(propName="width")
  div height
    Number(propName="height")
  div ScaleX
    Number(propName="scaleX")
  div ScaleY
    Number(propName="scaleY")
  div Rotation
    Number(propName="rotation")
  div Radius
    Number(propName="radius")
  div fill
    Color(propName="fill")
  div stroke
    Color(propName="stroke")
  div strokeWidth
    NumberSlider(propName="strokeWidth")
</template>

<script>
import Color from './Parameters/Color'
import NumberSlider from './Parameters/NumberSlider'
import Number from './Parameters/Number'
import String from './Parameters/String'

export default {
  components: {
    Color,
    NumberSlider,
    Number,
    String
  }
}
</script>
