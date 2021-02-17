<template lang="pug">
input(v-model="prop")
</template>

<script>
import PropertyMixin from './ParametersMixin'

export default {
  mixins: [
    PropertyMixin
  ]
}
</script>
