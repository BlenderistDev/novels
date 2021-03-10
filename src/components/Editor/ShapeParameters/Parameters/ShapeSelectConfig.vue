<template lang="pug">
select(v-model="prop" multiple)
  option(
    v-for="item in shapeList"
    :value="item.name"
  ) {{ item.name }}
</template>

<script>
import PropertyMixin from './ParametersMixin'
import { mapState, mapMutations } from 'vuex'
import _ from 'lodash'

export default {
  mixins: [
    PropertyMixin
  ],
  computed: {
    ...mapState('editor', [
      'shapeList'
    ])
  },
  methods: {
    ...mapMutations('editor', [
      'setShapeList',
      'updateShape'
    ]),
    prepareValue (value, oldValue) {
      const shapeList = _.cloneDeep(this.shapeList)
      _.map(shapeList, shape => {
        if (_.includes(value, shape.name)) {
          shape.group = this.selectedShape.name
          shape.draggable = false
        } else {
          shape.group = ''
          shape.draggable = true
        }
        return shape
      })
      this.setShapeList(shapeList)
      return value
    }
  }
}
</script>
