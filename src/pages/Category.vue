<template lang="pug">
  h1 {{ category }}
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">

</style>
