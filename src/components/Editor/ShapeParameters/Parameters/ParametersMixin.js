import { mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    propName: String
  },
  computed: {
    ...mapGetters('editor', [
      'selectedShape'
    ]),
    prop: {
      get () {
        return this.selectedShape[this.propName]
      },
      set (prop) {
        const config = { ...this.selectedShape }
        config[this.propName] = this.prepareValue(prop)
        this.updateShape(config)
      }
    }
  },
  methods: {
    ...mapMutations('editor', [
      'updateShape'
    ]),
    prepareValue: (value) => value
  }
}
