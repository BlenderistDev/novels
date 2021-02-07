<template lang="pug">
div(@click="addNewShape") Текст
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
        draggable: true,
        name: 'text',
        type: 'Text',
        text: '',
        image: null
      }
    }
  },
  methods: {
    ...mapMutations('editor', [
      'addText'
    ]),
    addNewShape () {
      const config = { ...this.config }
      config.name = config.name + Date.now()
      this.addText(config)
    }
  }
}
</script>
