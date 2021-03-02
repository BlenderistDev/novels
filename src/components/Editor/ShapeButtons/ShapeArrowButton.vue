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
        x: 0,
        y: 0,
        radius: 50,
        draggable: false,
        name: 'shapeArrow',
        type: 'ShapeArrow',
        points: []
      }
    }
  }
}
</script>
