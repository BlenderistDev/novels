<template lang="pug">
div(@click="addNewShape") Label
</template>

<script>
import addNewShapeMixin from './AddNewShapeMixin'

export default {
  mixins: [addNewShapeMixin],
  data () {
    return {
      config: {
        fill: '#f31212',
        stroke: '#000000',
        strokeWidth: 4,
        name: 'label',
        type: 'Label',
        width: 100,
        height: 100
      }
    }
  }
}
</script>
