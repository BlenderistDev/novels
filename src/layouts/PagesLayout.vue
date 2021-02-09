<template lang="pug">
  .page
    <Header/>
    main.content-container
      <router-view />
    <Footer/>
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
.content-container
  box-sizing: border-box
  width: 100%
  max-width: 1240px
  padding: 0 20px
  margin: 0 auto

.page
  box-sizing: border-box
  height: 100%
  min-height: 100vh
  display: flex
  flex-direction: column
  & .footer
    margin-top: auto
</style>
