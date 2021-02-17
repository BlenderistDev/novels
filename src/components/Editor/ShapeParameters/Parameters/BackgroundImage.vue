<template lang="pug">
input(v-model="image")
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    image: {
      get () {
        return this.$store.state.editor.backgroundImage
      },
      set (value) {
        this.setBackgroundImage(value)
      }
    }
  },
  methods: {
    ...mapMutations('editor', [
      'setBackgroundImage'
    ])
  }
}
</script>
