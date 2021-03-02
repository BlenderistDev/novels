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
      config: {
        x: 200,
        y: 200,
        scaleX: 1,
        scaleY: 1,
        draggable: true,
        name: 'image',
        type: 'Image',
        src: this.imageSrc,
        cropType: 'scale',
        filters: []
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
      config.src = this.imageSrc
      this.addShape(config)
      this.showForm = false
      this.imageSrc = ''
    }
  }
}
</script>
