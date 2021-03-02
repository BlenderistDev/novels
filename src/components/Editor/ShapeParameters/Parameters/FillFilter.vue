<template lang="pug">
div
  input(type="checkbox" v-model="prop")
  v-slot(v-if="prop")
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import _ from 'lodash'

export default {
  props: ['filter'],
  methods: {
    ...mapMutations('editor', [
      'updateShape'
    ])
  },
  computed: {
    ...mapGetters('editor', [
      'selectedShape'
    ]),
    prop: {
      get () {
        return _.includes(this.selectedShape.filters, this.filter)
      },
      set (prop) {
        const config = { ...this.selectedShape }
        config.filters = _.chain(config.filters)
          .concat(this.filter)
          .filter(filter => filter !== this.filter || prop)
          .value()
        this.updateShape(config)
      }
    }
  }
}
</script>
