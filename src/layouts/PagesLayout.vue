<template lang="pug">
  .page
    <Header/>
    main.content-container
      <router-view />
</template>

<script>
import Header from '../components/MainPage/Header'

export default {
  components: {
    Header
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
</style>
