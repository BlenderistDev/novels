<template lang="pug">
vue-editor(v-model="prop")
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { VueEditor } from 'vue2-editor'
import PropertyMixin from './ParametersMixin'

export default {
  mixins: [
    PropertyMixin
  ],
  components: {
    VueEditor
  },
  computed: {
    // content: {
    //   get () {
    //     return this.$store.state.editor.wysiwygContent
    //   },
    //   set (content) {
    //     this.setWysiwygContent(content)
    //   }
    // },
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
/*.overlay {*/
/*  position: fixed;*/
/*  bottom: 0;*/
/*  width: 100%;*/
/*}*/
</style>
