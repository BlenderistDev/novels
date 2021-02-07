<template lang="pug">
div
  .overlay(v-if="wysiwygTarget !== null")
    vue-editor(v-model="content")
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { VueEditor } from 'vue2-editor'

export default {
  components: {
    VueEditor
  },
  computed: {
    content: {
      get () {
        return this.$store.state.editor.wysiwygContent
      },
      set (content) {
        this.setWysiwygContent(content)
      }
    },
    ...mapState('editor', [
      'wysiwygTarget'
    ])
  },
  methods: {
    ...mapMutations('editor', [
      'hideWysiwyg'
    ]),
    ...mapActions('editor', [
      'setWysiwygContent'
    ])
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
