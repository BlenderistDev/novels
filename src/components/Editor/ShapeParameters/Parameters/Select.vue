<template lang="pug">
select(v-model="prop")
  option(
    v-for="item in list"
    :value="item"
  ) {{ item }}
</template>

<script>
import PropertyMixin from './ParametersMixin'

export default {
  props: {
    list: Array
  },
  mixins: [
    PropertyMixin
  ]
}
</script>
