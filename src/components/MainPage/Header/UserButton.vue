<template lang='pug'>
  router-link(:to="{ name: routeName}") {{ label }}
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      reguired: true
    },
    routeName: {
      type: String,
      required: true,
      default: 'login'
    }
  }

}
</script>

<style lang="sass" scoped>

</style>
