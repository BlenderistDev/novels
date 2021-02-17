<template lang="pug">
  v-image(
    :config="textConfig"
    @mousedown="$emit('mousedown', $event)"
    @touchstart="$emit('mousedown', $event)"
    @transformend="$emit('transformend', $event)"
    @dragmove="updateShape({...$event.target.attrs})"
  )
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import _ from 'lodash'
import { VueEditor } from 'vue2-editor'
import html2canvas from 'html2canvas'

export default {
  components: {
    VueEditor
  },
  data () {
    return {
      image: null
    }
  },
  props: {
    config: Object
  },
  computed: {
    textConfig () {
      const config = { ...this.config }
      config.image = this.image
      return config
    }
  },
  methods: {
    ...mapMutations('editor', [
      'updateShape'
    ]),
    ...mapActions('editor', [
      'updateShapeFromEvent'
    ]),

    // loadImage () {
    //   const image = new window.Image()
    //   image.src = this.config.src
    //   image.onload = () => {
    //     this.image = image
    //   }
    // },
    loadImage () {
      // if (!document.querySelector('.ql-editor')) {
      //   return
      // }
      html2canvas(document.querySelector('.text'), {
        backgroundColor: 'rgba(0,0,0,0)'
      }).then((canvas) => {
        this.image = canvas
      })
    }
  },
  watch: {
    config () {
      this.debouncedGetAnswer()
      // this.loadImage()
    }
  },
  created () {
    this.debouncedGetAnswer = _.debounce(this.loadImage, 500)
  }
}
</script>
