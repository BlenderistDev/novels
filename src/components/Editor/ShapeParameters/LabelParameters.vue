<template lang="pug">
div
  div Title
    String(propName="Title")
  div x
    Number(propName="x")
  div y
    Number(propName="y")
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
  div Color
    Color(propName="fill")
  div ShadowColor
    Color(propName="shadowColor")
  div fontSize
    NumberSlider(propName="fontSize")
</template>

<script>
import Color from './Parameters/Color'
import NumberSlider from './Parameters/NumberSlider'
import Number from './Parameters/Number'
import String from './Parameters/String'
import Select from './Parameters/Select'
import Textarea from './Parameters/Textarea'

export default {
  components: {
    Color,
    NumberSlider,
    Number,
    String,
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
