<template lang="pug">
input(type="range" v-model="prop" :min="min" :max="max")
</template>

<script>
import PropertyMixin from './ParametersMixin'

export default {
  props: {
    min: {
      default: 0
    },
    max: {
      default: 20
    }
  },
  mixins: [
    PropertyMixin
  ],
  methods: {
    prepareValue: (value) => parseInt(value)
  }
}
</script>
