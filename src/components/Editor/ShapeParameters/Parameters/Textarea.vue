<template lang="pug">
textarea(v-model="prop")
</template>

<script>
import PropertyMixin from './ParametersMixin'

export default {
  mixins: [
    PropertyMixin
  ]
}
</script>
