<template lang="pug">
  .burger
    img(src="https://www.svgrepo.com/show/312300/hamburger-menu.svg").burger__icon
</template>

<script>
export default {

}
</script>

<style lang="sass">
@import '../../../css/mixins'

.burger
  @include media-tablet
    display: none
  box-sizing: border-box
  width: 40px
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  font-size: 0
  margin-left: -10px
  margin-right: 10px
  cursor: pointer
  &__icon
    max-width: 100%
</style>
