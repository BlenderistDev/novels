<template lang="pug">
  header.header
    <Logo/>
    <Navigation/>
    <UserPanel/>
</template>

<script>
import Navigation from './Header/Navigation'
import Logo from './Header/Logo'
// import Acount from './Header/Acount'
// import Search from './Header/Search'
// import BurgerIcon from './Header/BurgerIcon'
import UserPanel from './Header/UserPanel'

export default {
  components: {
    Navigation,
    Logo,
    // Acount,
    // Search,
    // BurgerIcon,
    UserPanel
  }
}
</script>

<style lang="sass" scoped>
@import '../../css/mixins'

.header
  box-sizing: border-box
  height: 50px
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .3)
  display: flex
  align-items: center
  padding: 0 20px
  @include media-tablet
  @include media-laptop
    padding: 0 30px
</style>
