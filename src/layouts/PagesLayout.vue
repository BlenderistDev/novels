<template lang="pug">
  .page-content
    Header
    router-view
    Footer
</template>

<script>
import Header from '../components/MainPage/Header'
import Footer from '../components/MainPage/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="sass">
.page-content
  box-sizing: border-box
  height: 100%
  min-height: 100vh
  display: flex
  flex-direction: column
  & .footer
    margin-top: auto
</style>
