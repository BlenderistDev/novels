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
  props: ['shapeNumber'],
  computed: {
    ...mapState('editor', [
      'shapeList'
    ])
  }
  // methods: {
  //   prepareValue (value, oldValue) {
  //     console.log(value)
  //     oldValue[this.shapeNumber * 2] = value.x
  //     oldValue[this.shapeNumber * 2 + 1] = value.y
  //     return oldValue
  //   }
  // }
}
</script>
