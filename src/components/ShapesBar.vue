<template lang="pug">
div
  ImageButton
  CircleButton
  TextButton
</template>

<script>
import CircleButton from './ShapeButtons/CircleButton'
import ImageButton from './ShapeButtons/ImageButton'
import TextButton from './ShapeButtons/TextButton'

export default {
  components: {
    CircleButton,
    ImageButton,
    TextButton
  }
}
</script>
