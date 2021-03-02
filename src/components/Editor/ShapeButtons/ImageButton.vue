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
import addNewShapeMixin from './AddNewShapeMixin'

export default {
  mixins: [addNewShapeMixin],
  data () {
    return {
      showForm: false,
      imageSrc: '',
      config: {
        name: 'image',
        type: 'Image',
        cropType: 'scale',
        filters: []
      }
    }
  },
  methods: {
    prepareConfig (config) {
      config.src = this.imageSrc
      return config
    }
  }
}
</script>
