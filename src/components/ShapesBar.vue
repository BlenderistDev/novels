<template lang="pug">
div
  ImageButton
  CircleButton
</template>

<script>
import CircleButton from './ShapeButtons/CircleButton'
import ImageButton from './ShapeButtons/ImageButton'

export default {
  components: {
    CircleButton,
    ImageButton
  }
}
</script>
