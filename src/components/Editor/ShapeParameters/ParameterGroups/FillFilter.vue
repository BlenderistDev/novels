<template lang="pug">
div
  div(v-if="showFilters")
    span(@click="showFilters = false") Скрыть
    div(
      v-for="(filter, name) in filters" :key="name"
    ) {{ name }}

      FillFilter(
        propName="filters"
        :filter="filter.filter"
      )
        div(v-for="option in filter.options")
          NumberSlider(:propName="option.name" :min="option.min" :max="option.max" :step="option.step")
          | {{ option.name}}
  span(
    v-else
    @click="showFilters = true"
  ) Фильтры
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
          options: [
            {
              name: 'noise',
              min: '0',
              max: 20,
              step: 1
            }
          ]
        },
        Blur: {
          filter: Konva.Filters.Blur,
          options: [
            {
              name: 'blurRadius',
              min: '0',
              max: 20,
              step: 1
            }
          ]
        },
        Brighten: {
          filter: Konva.Filters.Brighten,
          options: [
            {
              name: 'brightness',
              min: '0',
              max: 10,
              step: 0.1
            }
          ]
        },
        Contrast: {
          filter: Konva.Filters.Contrast,
          options: [
            {
              name: 'contrast',
              min: -20,
              max: 20,
              step: 1
            }
          ]
        },
        Emboss: {
          filter: Konva.Filters.Emboss,
          options: [
            {
              name: 'embossStrength',
              min: 0,
              max: 10,
              step: 0.1
            },
            {
              name: 'embossWhiteLevel',
              min: 0,
              max: 10,
              step: 0.1
            }
          ]
        },
        Enhance: {
          filter: Konva.Filters.Enhance,
          options: [
            {
              name: 'enhance',
              min: 0,
              max: 255,
              step: 1
            }
          ]
        },
        HSL: {
          filter: Konva.Filters.HSL,
          options: [
            {
              name: 'saturation',
              min: 0,
              max: 100,
              step: 1
            },
            {
              name: 'hue',
              min: 0,
              max: 360,
              step: 1
            },
            {
              name: 'luminance',
              min: -2,
              max: 2,
              step: 0.1
            }
          ]
        },
        HSV: {
          filter: Konva.Filters.HSV,
          options: [
            {
              name: 'saturation',
              min: 0,
              max: 100,
              step: 1
            },
            {
              name: 'hue',
              min: 0,
              max: 360,
              step: 1
            },
            {
              name: 'value',
              min: 0,
              max: 1,
              step: 0.1
            }
          ]
        },
        Mask: {
          filter: Konva.Filters.Mask,
          options: [
            {
              name: 'threshold',
              min: 0,
              max: 300,
              step: 10
            }
          ]
        },
        Pixelate: {
          filter: Konva.Filters.Pixelate,
          options: [
            {
              name: 'pixelSize',
              min: 0,
              max: 100,
              step: 1
            }
          ]
        },
        Posterize: {
          filter: Konva.Filters.Posterize,
          options: [
            {
              name: 'levels',
              min: 0,
              max: 1,
              step: 0.1
            }
          ]
        },
        RGB: {
          filter: Konva.Filters.RGB,
          options: [
            {
              name: 'red',
              min: 0,
              max: 256,
              step: 1
            },
            {
              name: 'green',
              min: 0,
              max: 256,
              step: 1
            },
            {
              name: 'blue',
              min: 0,
              max: 256,
              step: 1
            }
          ]
        },
        RGBA: {
          filter: Konva.Filters.RGBA,
          options: [
            {
              name: 'red',
              min: 0,
              max: 256,
              step: 1
            },
            {
              name: 'green',
              min: 0,
              max: 256,
              step: 1
            },
            {
              name: 'blue',
              min: 0,
              max: 256,
              step: 1
            },
            {
              name: 'alpha',
              min: 0,
              max: 1,
              step: 0.1
            }
          ]
        },
        Threshold: {
          filter: Konva.Filters.Threshold,
          options: [
            {
              name: 'threshold',
              min: 0,
              max: 1,
              step: 0.1
            }
          ]
        }
      },
      showFilters: false
    }
  }
}
</script>
