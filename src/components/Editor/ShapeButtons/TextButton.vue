<template lang="pug">
div(@click="addNewShape") Текст
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
        draggable: true,
        name: 'text',
        type: 'Text',
        text: ''
      }
    }
  }
}
</script>
