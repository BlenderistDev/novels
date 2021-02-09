<template lang="pug">
  .page
    <Header/>
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
</style>
