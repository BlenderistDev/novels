<template lang="pug">
select(v-model="prop")
  option(
    v-for="item in shapeList"
    :value="item.name"
  ) {{ item.name }}
</template>

<script>
import PropertyMixin from './ParametersMixin'
import { mapState } from 'vuex'

export default {
  mixins: [
    PropertyMixin
  ],
  computed: {
    ...mapState('editor', [
      'shapeList'
    ])
  }
}
</script>
