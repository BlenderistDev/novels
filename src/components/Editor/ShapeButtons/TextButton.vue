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
        name: 'text',
        type: 'Text',
        text: ''
      }
    }
  }
}
</script>
