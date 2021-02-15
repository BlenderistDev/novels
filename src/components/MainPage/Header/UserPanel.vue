<template lang="pug">
  .user-panel
    <UserButton label="Войти" routeName="login" class="user-panel__link" />
    <UserButton label="Зарегистрироваться" routeName="registration" class="user-panel__link" />
</template>

<script>
import UserButton from './UserButton.vue'

export default {
  components: {
    UserButton
  }
}
</script>

<style lang="sass">
@import '../../../css/_utils/mixins'
@import '../../../css/_utils/variables'

.user-panel
  box-sizing: border-box
  display: flex
  align-items: center
  &__link
    box-sizing: border-box
    display: block
    background-color: $primary-bg
    color: $btn-color
    text-decoration: none
    padding: 10px 16px
    border-radius: 4px
    font-weight: 600
    line-height: 1
    font-size: 12px
    margin: 0 10px
    transition: background-color .3s linear
    &:hover
      background-color: $hover-bg
      transition: background-color .3s linear
</style>
