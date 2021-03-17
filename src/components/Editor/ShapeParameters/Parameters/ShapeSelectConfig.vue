<template lang="pug">
select(v-model="prop" multiple)
  option(
    v-for="item in shapeListForGroup"
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
    ]),
    shapeListForGroup () {
      return _.filter(this.shapeList, shape => shape.name !== this.selectedShape.name)
    }
  },
  methods: {
    ...mapMutations('editor', [
      'setShapeList',
      'updateShape'
    ]),
    prepareValue (value, oldValue) {
      const shapeList = _.cloneDeep(this.shapeList)
      _.map(shapeList, shape => {
        if (_.includes(_.difference(value, oldValue), shape.name)) {
          shape.group = this.selectedShape.name
          shape.draggable = false
          shape.x = shape.x - this.selectedShape.x
          shape.y = shape.y - this.selectedShape.y
        }
        if (_.includes(_.difference(oldValue, value), shape.name)) {
          shape.group = ''
          shape.draggable = true
          shape.x = shape.x + this.selectedShape.x
          shape.y = shape.y + this.selectedShape.y
        }
        return shape
      })
      this.setShapeList(shapeList)
      return value
    }
  }
}
</script>
