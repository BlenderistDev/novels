<template lang="pug">
  .acount
    .acount__img
      img(src="https://www.svgrepo.com/show/43426/profile.svg")
</template>

<script>
export default {

}
</script>

<style lang="sass">
@import '../../../css/mixins'

.acount
  box-sizing: border-box
  cursor: pointer
  margin-left: auto
  @include media-tablet
    margin-left: 30px
  @include media-laptop
  &__img
    box-sizing: border-box
    font-size: 0
    width: 30px
    & img
      max-width: 100%
</style>
