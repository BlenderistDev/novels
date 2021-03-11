<template lang="pug">
div(@click="addNewShape") Группа
</template>

<script>
import addNewShapeMixin from './AddNewShapeMixin'

export default {
  mixins: [addNewShapeMixin],
  data () {
    return {
      config: {
        shapes: [],
        x: 0,
        y: 0,
        name: 'group',
        type: 'Group'
      }
    }
  }
}
</script>
