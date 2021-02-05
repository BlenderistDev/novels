<template lang="pug">
  span(@click="addNewShape") Текст
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      config: {
        x: 200,
        y: 200,
        scaleX: 1,
        scaleY: 1,
        editable: true,
        draggable: true,
        name: 'text',
        type: 'Text',
        text: 'Some text on canvas'
      }
    }
  },
  methods: {
    ...mapMutations('editor', [
      'addShape'
    ]),
    addNewShape () {
      const config = { ...this.config }
      config.name = config.name + Date.now()
      this.addShape(config)
    }
  }
}
</script>
