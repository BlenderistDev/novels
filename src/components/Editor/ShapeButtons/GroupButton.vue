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
        name: 'group',
        type: 'Group'
      }
    }
  }
}
</script>
