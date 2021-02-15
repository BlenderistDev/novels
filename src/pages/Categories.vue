<template lang="pug">
  main.content-container
    h1 Categories {{ category }}
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="sass">

</style>
