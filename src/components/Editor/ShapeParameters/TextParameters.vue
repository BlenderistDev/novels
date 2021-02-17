<template lang="pug">
div
  div Title
    String(propName="Title")
  div x
    Number(propName="x")
  div y
    Number(propName="y")
  div Text
    Wysiwyg
</template>

<script>
import Color from './Parameters/Color'
import NumberSlider from './Parameters/NumberSlider'
import Number from './Parameters/Number'
import String from './Parameters/String'
import Wysiwyg from './Parameters/Wysiwyg'

export default {
  components: {
    Color,
    NumberSlider,
    Number,
    String,
    Wysiwyg
  }
}
</script>
