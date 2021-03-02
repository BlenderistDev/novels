<template lang="pug">
div(@click="addNewShape") Прямоугольник
</template>

<script>
import addNewShapeMixin from './AddNewShapeMixin'

export default {
  mixins: [addNewShapeMixin],
  data () {
    return {
      config: {
        name: 'rect',
        type: 'Rect',
        width: 100,
        height: 100
      }
    }
  }
}
</script>
