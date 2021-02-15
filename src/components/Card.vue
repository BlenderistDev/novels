<template lang="pug">
  .card
    .card__inner
      .card__img
        img(:src="card.image")
      .card__title {{ card.title }}
      .card__description {{ card.description }}
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      require: true
    }
  }

}
</script>

<style lang="sass">
@import '../css/_utils/_variables'
@import '../css/_utils/mixins'

.card
  box-sizing: border-box
  padding: 0 10px
  width: 25%

  .card
    &__inner
      box-sizing: border-box
      cursor: pointer
      &:hover
        & img
          transform: scale(1.05)
          transition: transform .4s linear
    &__img
      box-sizing: border-box
      font-size: 0
      width: 100%
      overflow: hidden
      margin-bottom: 15px
      & img
        transition: transform .2s linear
        max-width: 100%
    &__title
      box-sizing: border-box
      font: $h4
      margin-bottom: 10px

</style>
