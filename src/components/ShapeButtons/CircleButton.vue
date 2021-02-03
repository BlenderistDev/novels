<template lang="pug">
  span(@click="addNewCircle") Круг
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
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
        name: 'circle',
        type: 'Circle'
      }
    }
  },
  methods: {
    ...mapMutations('editor', [
      'addCircle'
    ]),
    addNewCircle () {
      const circleConfig = { ...this.configCircle }
      circleConfig.name = circleConfig.name + Date.now()
      this.addCircle(circleConfig)
    }
  }
}
</script>
