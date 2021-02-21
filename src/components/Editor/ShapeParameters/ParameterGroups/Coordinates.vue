<template lang="pug">
div
  div x
    Number(propName="x")
  div y
    Number(propName="x")
</template>

<script>
import Number from '../Parameters/Number'

export default {
  components: {
    Number
  }
}
</script>
