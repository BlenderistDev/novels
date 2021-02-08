<template lang="pug">
  .search
    input(type="text" placeholder="Поиск").search__input
    button.search__button
      img(src="https://www.svgrepo.com/show/14071/search.svg" alt="")
</template>

<script>
export default {

}
</script>

<style lang="sass">
@import '../../../css/mixins'
.search
  @include media-tablet
    order: inherit
    margin-left: auto
  @include media-laptop
  box-sizing: border-box
  display: flex
  align-items: center
  order: 1
  &__input
    @include media-tablet
      width: 200px
      margin-left: auto
    @include media-laptop
      width: 300px
    box-sizing: border-box
    border: none
    outline: none
    border-bottom: 1px solid #acacac
    font-size: 14px
    color: #222222
    letter-spacing: .03em
    transition: border-bottom-color .2s linear
    width: 0
    padding: 0
    &::-webkit-input-placeholder
      color: #acacac
      font-size: 12px
    &::-moz-placeholder
      color: #acacac
      font-size: 12px
    &:-ms-input-placeholder
      color: #acacac
      font-size: 12px
    &:-moz-placeholder
      color: #acacac
      font-size: 12px
    &:hover,
    &:focus
      border-bottom-color: #222222
      transition: border-bottom-color .2s linear
  &__button
    box-sizing: border-box
    width: 30px
    height: 30px
    display: flex
    align-items: center
    justify-content: center
    background-color: #fff
    border: none
    cursor: pointer
    margin-left: 10px
</style>
