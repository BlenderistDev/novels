<template lang="pug">
  header.header
    <BurgerIcon/>
    <Logo/>
    <Navigation/>
    <Search/>
    <Acount/>
</template>

<script>
import Navigation from './Header/Navigation'
import Logo from './Header/Logo'
import Acount from './Header/Acount'
import Search from './Header/Search'
import BurgerIcon from './Header/BurgerIcon'

export default {
  components: {
    Navigation,
    Logo,
    Acount,
    Search,
    BurgerIcon
  }
}
</script>

<style lang="sass" scoped>
@import '../../css/mixins'

.header
  box-sizing: border-box
  height: 60px
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .3)
  display: flex
  align-items: center
  padding: 0 20px
  @include media-tablet
  @include media-laptop
    padding: 0 30px
</style>
