<template lang="pug">
div
  div noise
    NumberSlider(propName="noise" max="10")
  div blur
    NumberSlider(propName="blurRadius" max="10")
  div Brighten
    NumberSlider(propName="brightness" max="1" step="0.01")
  div Contrast
    NumberSlider(propName="contrast" max="100" min="-100" step="-1")
</template>

<script>
import NumberSlider from '../Parameters/NumberSlider'

export default {
  components: {
    NumberSlider
  }
}
</script>
