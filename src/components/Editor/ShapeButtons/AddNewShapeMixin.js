import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      commonConfig: {
        x: 200,
        y: 200,
        scaleX: 1,
        scaleY: 1,
        draggable: true
      }
    }
  },
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
      const config = { ...this.commonConfig, ...this.config }
      config.name = config.name + Date.now()
      this.addShape(config)
    }
  }
}
