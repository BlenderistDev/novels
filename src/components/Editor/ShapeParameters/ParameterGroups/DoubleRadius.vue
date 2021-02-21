<template lang="pug">
div
  div innerRadius
    NumberSlider(propName="innerRadius" max="100")
  div outerRadius
    NumberSlider(propName="outerRadius" max="100")
</template>

<script>
import NumberSlider from '../Parameters/NumberSlider'

export default {
  components: {
    NumberSlider
  }
}
</script>
