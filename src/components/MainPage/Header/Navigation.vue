<template lang="pug">
  nav.nav
    each link in ['Главная', 'Библиотека', 'Жанры']
      a(href="#").nav__link
        span= link
</template>

<script>
export default {

}
</script>

<style lang="sass">
@import '../../../css/mixins'

.nav
  box-sizing: border-box
  display: none
  @include media-tablet
    align-items: center
    display: flex
    margin: 0 -10px
  @include media-laptop
    margin: 0 -20px
    display: block
  &__link
    box-sizing: border-box
    font-size: 14px
    font-weight: 700
    color: #222222
    text-transform: uppercase
    text-decoration: none
    letter-spacing: .02em
    @include media-tablet
      padding: 0 10px
    @include media-laptop
      padding: 0 20px
    & span
      box-sizing: border-box
      position: relative
      &::after
        display: block
        content: ""
        position: absolute
        right: 0
        bottom: 0
        left: 0
        height: 1px
        background-color: #222222
        transform: scale(0)
        transition: transform .2s linear
    &:hover
      & span
        &::after
          transform: scale(1)
          transition: transform .2s linear
</style>
