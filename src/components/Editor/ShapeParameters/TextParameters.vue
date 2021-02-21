<template lang="pug">
div
  Title
  Coordinates
  Scale
  Stroke
  div Text
    Textarea(propName="text")
  div FontFamily
    Select(
      propName="fontFamily"
      :list="fontList"
    )
    div FontStyle
    Select(
      propName="fontStyle"
      :list="fontStyleList"
    )
  Fill
  div fontSize
    NumberSlider(propName="fontSize")
</template>

<script>
import Coordinates from './ParameterGroups/Coordinates'
import Scale from './ParameterGroups/Scale'
import Stroke from './ParameterGroups/Stroke'
import Title from './ParameterGroups/Title'
import Fill from './ParameterGroups/Fill'
import NumberSlider from './Parameters/NumberSlider'
import Select from './Parameters/Select'
import Textarea from './Parameters/Textarea'

export default {
  components: {
    Coordinates,
    Scale,
    Stroke,
    Title,
    Fill,
    NumberSlider,
    Select,
    Textarea
  },
  data () {
    return {
      fontList: [
        'Arial',
        'Verdana',
        'Helvetica',
        'Tahoma',
        'Trebuchet MS',
        'Times New Roman',
        'Georgia',
        'Garamond',
        'Courier New',
        'Brush Script MT'
      ],
      fontStyleList: [
        'normal',
        'bold',
        'italic'
      ]
    }
  }
}
</script>
