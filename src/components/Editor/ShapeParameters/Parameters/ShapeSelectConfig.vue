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
      'setShapeList'
    ]),
    prepareValue (value, oldValue) {
      return _.filter(this.shapeList, shape => _.includes(value, shape.name))
    },
    prepareProp (prop) {
      return _.map(prop, shape => shape.name)
    },
    saveConfig (config) {
      this.setShapeList(_.filter(this.shapeList, shape => !_.find(this.prepareValue(this.prop), shape.name)))
      config.shapes = _.map(config.shapes, shape => {
        shape.draggable = false
        return shape
      })
      this.updateShape(this.prepareConfig(config))
    }
  }
}
</script>
