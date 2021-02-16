<template lang="pug">
  header.header
    .header__inner
      .header__logo
        Logo
      .header__navigation
        Navigation
      .header__search
        Search
      .header__user-panel
        UserPanel
</template>

<script>
import Logo from './Header/Logo'
import Navigation from './Header/Navigation'
import Search from './Header/Search'
import UserPanel from './Header/UserPanel'

export default {
  components: {
    Logo,
    Navigation,
    Search,
    UserPanel
  }
}
</script>

<style lang="sass">
@import '../../css/mixins'

.header
  box-sizing: border-box
  height: 60px
  background-color: #fff
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .3)

  .header
    &__inner
      box-sizing: border-box
      width: 100%
      max-width: 1920px
      margin: 0 auto
      padding: 0 20px
      height: 100%
      display: flex
      align-items: center
    &__navigation
      box-sizing: border-box
      margin-left: 50px
    &__search
      box-sizing: border-box
      margin: 0 auto
    &__user-panel
      box-sizing: border-box
      margin-left: auto

  @include media-tablet
  @include media-laptop
    padding: 0 30px
</style>
