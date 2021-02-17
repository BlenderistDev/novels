<template lang="pug">
  div.image-btn
    | Картинка
    q-popup-edit(
      v-model="imageSrc"
      color="grey-10"
    )
      q-input(
        color="grey-10"
        v-model="imageSrc"
        dense
        autofocus
        hint="Добаьте ссылку на картинку"
      )
        q-btn(
          flat
          dense
          color="positive"
          icon="check_circle"
          @click="addNewShape"
        )
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
