<template lang="pug">
div(@click="addNewShape") Стрелка
</template>

<script>
import addNewShapeMixin from './AddNewShapeMixin'

export default {
  mixins: [addNewShapeMixin],
  data () {
    return {
      config: {
        scaleX: 1,
        scaleY: 1,
        radius: 50,
        fill: '#f31212',
        stroke: '#000000',
        strokeWidth: 4,
        draggable: true,
        name: 'shapeArrow',
        type: 'ShapeArrow',
        points: []
      }
    }
  }
}
</script>
