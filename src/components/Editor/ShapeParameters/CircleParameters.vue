<template lang="pug">
input(type="color" v-model="color")
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('editor', [
      'selectedShape'
    ]),
    color: {
      get () {
        return this.selectedShape.fill
      },
      set (color) {
        const config = { ...this.selectedShape }
        config.fill = color
        this.updateShape(config)
      }
    }
  },
  methods: {
    ...mapMutations('editor', [
      'updateShape'
    ])
  }
}
</script>
