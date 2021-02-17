<template lang="pug">
input(type="range" v-model="prop" min="0" max="20")
</template>

<script>
import PropertyMixin from './ParametersMixin'

export default {
  mixins: [
    PropertyMixin
  ],
  methods: {
    prepareValue: (value) => parseInt(value)
  }
}
</script>
