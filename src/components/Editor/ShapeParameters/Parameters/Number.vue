<template lang="pug">
input(type="float" v-model="prop")
</template>

<script>
import PropertyMixin from './ParametersMixin'

export default {
  mixins: [
    PropertyMixin
  ],
  methods: {
    prepareValue: (value, oldValue) => parseInt(value)
  }
}
</script>
