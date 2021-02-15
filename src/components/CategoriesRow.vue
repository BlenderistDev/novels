<template lang="pug">
  Fragment
    .categories-row
      .categories-row__top
        .categories-row__name Название категории
        .categories-row__link
          router-link(to="#") Смотреть все
      .categories-row__list
        Card(v-for="card in cards" :key="card.title" :card="card")
    .categories-row
      .categories-row__top
        .categories-row__name Название категории
        .categories-row__link
          router-link(to="#") Смотреть все
      .categories-row__list
        Card(v-for="card in cards" :key="card.title" :card="card")
</template>

<script>
import { Fragment } from 'vue-fragment'
import Card from './Card.vue'

export default {
  components: {
    Card,
    Fragment
  },

  data () {
    return {
      cards: [
        {
          image: 'https://picsum.photos/300/300',
          title: 'Card title 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam rerum beatae quis modi, corrupti facilis.'
        },
        {
          image: 'https://picsum.photos/300/300',
          title: 'Card title 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam rerum beatae quis modi, corrupti facilis.'
        },
        {
          image: 'https://picsum.photos/300/300',
          title: 'Card title 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam rerum beatae quis modi, corrupti facilis.'
        },
        {
          image: 'https://picsum.photos/300/300',
          title: 'Card title 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam rerum beatae quis modi, corrupti facilis.'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
@import '../css/_utils/_variables'
@import '../css/_utils/mixins'

.categories-row
  box-sizing: border-box
  margin-bottom: 80px

  .categories-row
    &__top
      box-sizing: border-box
      display: flex
      align-items: center
      margin-bottom: 30px
    &__name
      font: $h3
      margin-right: 20px
    &__link
      box-sizing: border-box
      & a:link,
      & a:visited
        box-sizing: border-box
        display: inline-block
        width: 100%
        height: 100%
        border: 1px solid #121232
        border-radius: 4px
        padding: 7px 16px
        text-decoration: none
        font-size: 12px
        line-height: 1
        font-weight: 600
        color: #121212
        transition: background-color .2s linear, color .2s linear
      & a:hover,
      & a:active
        color: #ffffff
        background-color: #121232
        transition: background-color .2s linear, color .2s linear
    &__list
      box-sizing: border-box
      display: flex
      align-items: flex-start
      margin: 0 -10px

</style>
