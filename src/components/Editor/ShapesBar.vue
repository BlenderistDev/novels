<template lang="pug">
div.q-pa-sm.q-pl-md.row.items-center.bg-blue-6.text-white.shape-bar
  .shape-bar__item
    ImageButton
  .shape-bar__item
    CircleButton
  .shape-bar__item
    TextButton
  .shape-bar__item
    RectButton
  .shape-bar__item
    EllipseButton
  .shape-bar__item
    StarButton
  .shape-bar__item
    LabelButton
  .shape-bar__item
    RingButton
  .shape-bar__item
    ShapeArrowButton
</template>

<script>
import CircleButton from './ShapeButtons/CircleButton'
import ImageButton from './ShapeButtons/ImageButton'
import TextButton from './ShapeButtons/TextButton'
import RectButton from './ShapeButtons/RectButton'
import EllipseButton from './ShapeButtons/EllipseButton'
import StarButton from './ShapeButtons/StarButton'
import LabelButton from './ShapeButtons/LabelButton'
import RingButton from './ShapeButtons/RingButton'
import ShapeArrowButton from './ShapeButtons/ShapeArrowButton'

export default {
  components: {
    CircleButton,
    ImageButton,
    TextButton,
    RectButton,
    EllipseButton,
    StarButton,
    LabelButton,
    RingButton,
    ShapeArrowButton
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
