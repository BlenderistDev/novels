<template lang="pug">
div.q-pa-sm.q-pl-md.row.items-center.bg-blue-6.text-white.shape-bar
  .shape-bar__item
    ImageButton
  .shape-bar__item
    CircleButton
  .shape-bar__item
    WysiwygButton
  .shape-bar__item
    TextButton
</template>

<script>
import CircleButton from './ShapeButtons/CircleButton'
import ImageButton from './ShapeButtons/ImageButton'
import TextButton from './ShapeButtons/TextButton'
import WysiwygButton from './ShapeButtons/WysiwygButton'

export default {
  components: {
    CircleButton,
    ImageButton,
    TextButton,
    WysiwygButton
  }
}
</script>

<style lang="sass">
.shape-bar
  box-sizing: border-box
  &__item
    box-sizing: border-box
    cursor: pointer
    margin: 0 20px
    font-weight: 500
    position: relative
    &::after
      display: block
      content: ""
      position: absolute
      right: 0
      bottom: 0
      left: 0
      height: 1px
      background-color: #fff
      transform: scale(0)
      transition: transform .2s linear
    &:hover
      &::after
        transform: scale(1)
        transition: transform .2s linear
</style>
