<template lang="pug">
draggable(v-model="shapeList")
  transition-group
    div(
      v-for="shape in shapeList"
      :key="shape.name"
      @click="setSelectedShape(shape.name)"
    ) {{shape.name}}
</template>

<script>
import draggable from 'vuedraggable'
import { mapMutations } from 'vuex'

export default {
  components: {
    draggable
  },
  computed: {
    shapeList: {
      get () {
        return this.$store.state.editor.shapeList
      },
      set (value) {
        this.setShapeList(value)
      }
    }
  },
  methods: {
    ...mapMutations('editor', [
      'setShapeList',
      'setSelectedShape'
    ])
  }
}
</script>
