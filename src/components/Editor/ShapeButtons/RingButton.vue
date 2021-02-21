<template lang="pug">
div(@click="addNewShape") Кольцо
</template>

<script>
import addNewShapeMixin from './AddNewShapeMixin'

export default {
  mixins: [addNewShapeMixin],
  data () {
    return {
      config: {
        x: 200,
        y: 200,
        scaleX: 1,
        scaleY: 1,
        radius: 50,
        fill: '#f31212',
        stroke: '#000000',
        strokeWidth: 4,
        draggable: true,
        name: 'ring',
        type: 'Ring',
        innerRadius: 50,
        outerRadius: 100
      }
    }
  }
}
</script>
