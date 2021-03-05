<template lang="pug">
div
  div(
    v-for="shape in groupList"
    :key="shape.name"
    @click="setSelectedShape(shape.name)"
  ) {{shape.name}}
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('editor', [
      'groupList'
    ])
  },
  methods: {
    ...mapMutations('editor', [
      'setSelectedShape'
    ])
  }
}
</script>
