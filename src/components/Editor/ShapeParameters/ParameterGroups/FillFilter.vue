<template lang="pug">
div
  div(
    v-for="(filter, name) in filters" :key="name"
  ) {{ name }}
    FillFilter(
      propName="filters"
      :filter="filter.filter"
    )
      div(v-for="option in filter.options")
        NumberSlider(:propName="option.name" :min="option.min" :max="option.max")
</template>

<script>
import FillFilter from '../Parameters/FillFilter'
import NumberSlider from '../Parameters/NumberSlider'
import Konva from 'konva'

export default {
  components: {
    FillFilter,
    NumberSlider
  },
  data () {
    return {
      filters: {
        Grayscale: { filter: Konva.Filters.Grayscale },
        Invert: { filter: Konva.Filters.Invert },
        Sepia: { filter: Konva.Filters.Sepia },
        Solarize: { filter: Konva.Filters.Solarize },
        Noise: {
          filter: Konva.Filters.Noise,
          option: {
            name: 'noise',
            min: '0',
            max: 20
          }
        }
      }
    }
  }
}
</script>
