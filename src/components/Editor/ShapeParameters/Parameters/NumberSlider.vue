<template lang="pug">
input(type="range" v-model="prop" :min="min" :max="max" :step="step")
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
    },
    step: {
      default: 1
    }
  },
  mixins: [
    PropertyMixin
  ],
  methods: {
    prepareValue: (value, oldValue) => parseFloat(value)
  }
}
</script>
