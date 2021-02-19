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
      'addShape'
    ]),
    addNewShape () {
      const config = { ...this.config }
      config.name = config.name + Date.now()
      this.addShape(config)
    }
  }
}
