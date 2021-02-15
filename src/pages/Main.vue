<template lang="pug">
  Fragment
    Slider
    main.content-container
      CategoriesRow
</template>

<script>
import { Fragment } from 'vue-fragment'
import Slider from '../components/MainPage/Slider'
import CategoriesRow from '../components/CategoriesRow.vue'

export default {
  components: {
    Fragment,
    Slider,
    CategoriesRow
  }
}
</script>

<style lang="sass">
</style>
