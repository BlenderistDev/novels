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
        name: 'star',
        type: 'Star',
        width: 100,
        height: 100
      }
    }
  }
}
</script>
