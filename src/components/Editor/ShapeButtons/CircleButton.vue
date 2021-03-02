<template lang="pug">
div(@click="addNewShape") Круг
</template>

<script>
import addNewShapeMixin from './AddNewShapeMixin'

export default {
  mixins: [addNewShapeMixin],
  data () {
    return {
      config: {
        radius: 50,
        fill: '#f31212',
        stroke: '#000000',
        strokeWidth: 4,
        name: 'circle',
        type: 'Circle'
      }
    }
  }
}
</script>
