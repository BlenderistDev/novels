<template lang="pug">
div
  div stroke
    Color(propName="stroke")
  div strokeWidth
    NumberSlider(propName="strokeWidth")
</template>

<script>
import NumberSlider from '../Parameters/NumberSlider'
import Color from '../Parameters/Color'

export default {
  components: {
    NumberSlider,
    Color
  }
}
</script>
