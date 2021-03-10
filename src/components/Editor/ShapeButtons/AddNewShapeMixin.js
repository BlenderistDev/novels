import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      commonConfig: {
        x: 200,
        y: 200,
        scaleX: 1,
        scaleY: 1,
        draggable: true,
        stroke: '#000000',
        strokeWidth: 1,
        group: ''
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
      const config = { ...this.commonConfig, ...this.randomColor(), ...this.config }
      config.name = config.name + Date.now()
      this.addShape(this.prepareConfig(config))
    },
    prepareConfig: config => config,
    randomColor () {
      return {
        fill: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
      }
    }
  }
}
