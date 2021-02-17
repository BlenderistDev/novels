<template lang="pug">
div(@click="addNewShape") Круг
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      configCircle: {
        x: 200,
        y: 200,
        scaleX: 1,
        scaleY: 1,
        radius: 50,
        fill: '#f31212',
        stroke: '#000000',
        strokeWidth: 4,
        draggable: true,
        name: 'circle',
        type: 'Circle'
      }
    }
  },
  methods: {
    ...mapMutations('editor', [
      'addShape'
    ]),
    addNewShape () {
      const circleConfig = { ...this.configCircle }
      circleConfig.name = circleConfig.name + Date.now()
      this.addShape(circleConfig)
    }
  }
}
</script>
