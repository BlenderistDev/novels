import { mapActions, mapMutations } from 'vuex'

export default {
  props: {
    config: Object
  },
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    ...mapMutations('editor', [
      'updateShape'
    ]),
    ...mapActions('editor', [
      'updateShapeFromEvent'
    ])
  }
}
