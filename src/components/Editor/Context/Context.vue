<template lang="pug">
#menu(:style="style")
  button(@click="del") Delete
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    open (event, stage) {
      if (event.target.attrs.type !== 'Background') {
        this.currentShape = event.target.attrs.name
        const containerRect = stage.container().getBoundingClientRect()
        this.display = 'initial'
        this.top = containerRect.top + stage.getPointerPosition().y + 4 + 'px'
        this.left = containerRect.left + stage.getPointerPosition().x + 4 + 'px'
      }
    },
    hide () {
      this.display = 'none'
    },
    ...mapMutations('editor', [
      'deleteShape'
    ]),
    del () {
      this.hide()
      this.deleteShape(this.currentShape)
    }
  },
  data () {
    return {
      display: 'none',
      top: 0,
      left: 0,
      currentShape: ''
    }
  },
  computed: {
    style () {
      return {
        display: this.display,
        left: this.left,
        top: this.top
      }
    }
  }
}
</script>

<style scoped>
      #menu {
        display: none;
        position: absolute;
        width: 60px;
        background-color: white;
        box-shadow: 0 0 5px grey;
        border-radius: 3px;
      }

      #menu button {
        width: 100%;
        background-color: white;
        border: none;
        margin: 0;
        padding: 10px;
      }

      #menu button:hover {
        background-color: lightgray;
      }
</style>
