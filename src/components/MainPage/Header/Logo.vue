<template lang="pug">
  .logo
    router-link(to="/") Novels
</template>

<script>
export default {

}
</script>

<style lang="sass">
@import '../../../css/mixins'
.logo
  box-sizing: border-box
  font-size: 20px
  & a:link,
  & a:visited
    text-decoration: none
    color: #E50914
    font-weight: 500
    transition: color .3s linear
  & a:hover,
  & a:active
    color: #ff0815
    transition: color .3s linear
  @include media-tablet
    margin-right: 40px
  @include media-laptop
    margin-right: 80px

</style>
