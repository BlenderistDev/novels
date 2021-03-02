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
        radius: 50,
        name: 'ring',
        type: 'Ring',
        innerRadius: 50,
        outerRadius: 100
      }
    }
  }
}
</script>
