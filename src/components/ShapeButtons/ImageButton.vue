<template lang="pug">
span
  span(
    @click="showForm = true"
  ) Картинка
  span(v-if="showForm")
    input(
      v-model="imageSrc"
    )
    span(@click="addNewShape") Добавить
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      showForm: false,
      image: null,
      imageSrc: '',
      configCircle: {
        x: 200,
        y: 200,
        scaleX: 1,
        scaleY: 1,
        draggable: true,
        name: 'image',
        type: 'Image',
        src: this.imageSrc
      }
    }
  },
  methods: {
    ...mapMutations('editor', [
      'addShape'
    ]),
    addNewShape () {
      const circleConfig = { ...this.configCircle }
      circleConfig.name = circleConfig.name + Date.now()
      circleConfig.src = this.imageSrc
      this.addShape(circleConfig)
      this.showForm = false
      this.imageSrc = ''
    }
  }
}
</script>
