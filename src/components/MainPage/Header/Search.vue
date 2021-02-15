<template lang="pug">
  form.search
    button(type="submit").search__btn
      svg(width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg")
        path(d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#505565")
    input(type="text" placeholder="Поиск").search__input
</template>

<script>
export default {

}
</script>

<style lang="sass">
@import '../../../css/_utils/mixins'
@import '../../../css/_utils/variables'
.search
  box-sizing: border-box
  display: flex
  align-items: center
  border: 1px solid #A1A4B1
  border-radius: 4px
  width: 480px
  background: #F4F4F4
  .search
    &__btn
      box-sizing: border-box
      font-size: 0
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer
      border: none
      background: none
      outline: none
    &__input
      box-sizing: border-box
      border: none
      font-size: 14px
      color: $text-secondary
      outline: none
      width: 100%
      padding-right: 15px
      background: transparent

      &::-webkit-input-placeholder
        color: $text-secondary
        font-size: 14px
      &::-moz-placeholder
        color: $text-secondary
        font-size: 14px
      &:-ms-input-placeholder
        color: $text-secondary
        font-size: 14px
      &:-moz-placeholder
        color: $text-secondary
        font-size: 14px
    // &:hover,
    // &:focus
    //   border-bottom-color: #222222
    //   transition: border-bottom-color .2s linear
</style>
