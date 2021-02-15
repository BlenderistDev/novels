<template lang="pug">
input(type="color" v-model="prop")
</template>

<script>
import PropertyMixin from './ParametersMixin'

export default {
  mixins: [
    PropertyMixin
  ]
}
</script>
