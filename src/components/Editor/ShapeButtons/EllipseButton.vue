<template lang="pug">
div(@click="addNewShape") Элипс
</template>

<script>
import addNewShapeMixin from './AddNewShapeMixin'

export default {
  mixins: [addNewShapeMixin],
  data () {
    return {
      config: {
        name: 'ellipse',
        type: 'Ellipse',
        width: 100,
        height: 100
      }
    }
  }
}
</script>
