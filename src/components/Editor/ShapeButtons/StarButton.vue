<template lang="pug">
div(@click="addNewShape") Звезда
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
        fill: '#f31212',
        stroke: '#000000',
        strokeWidth: 4,
        draggable: true,
        name: 'star',
        type: 'Star',
        width: 100,
        height: 100
      }
    }
  }
}
</script>
