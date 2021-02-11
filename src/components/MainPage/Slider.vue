<template lang="pug">
  .carousel
    Swiper(:options="swiperOption")
      SwiperSlide.carousel__item
        img(src="https://picsum.photos/1920/500")
      SwiperSlide.carousel__item
        img(src="https://picsum.photos/1920/500")
    .carousel__arrow.carousel__arrow--prev.js-carousel-prev
      svg(width="120" height="65" viewBox="0 0 477 262" fill="none" xmlns="http://www.w3.org/2000/svg")
        path(d="M130.607 0.5L151.819 21.713L57.426 116.107H476.213V146.107H57.426L151.819 240.5L130.607 261.713L0 131.106L130.607 0.5Z" fill="white")
    .carousel__arrow.carousel__arrow--next.js-carousel-next
      svg(width="120" height="65" viewBox="0 0 477 262" fill="none" xmlns="http://www.w3.org/2000/svg")
        path(d="M345.606 0.5L324.394 21.713L418.787 116.107H0V146.107H418.787L324.394 240.5L345.606 261.713L476.213 131.106L345.606 0.5Z" fill="white")
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.js-carousel-next',
          prevEl: '.js-carousel-prev'
        }
      }
    }
  }
}
</script>

<style lang="sass">
@import '../../css/mixins'
.carousel
  box-sizing: border-box
  width: 100%
  max-width: 1920px
  margin: 0 auto
  position: relative
  & .swiper-wrapper,
  & .swiper-container
    height: 100%
  .carousel
    &__item
      box-sizing: border-box
      font-size: 0
      width: 100%
      max-width: 1920px
      height: 100%
      position: relative
      overflow: hidden
      & img
        box-sizing: border-box
        position: absolute
        top: 0
        left: 50%
        transform: translateX(-50%)
    &__arrow
      box-sizing: border-box
      font-size: 0
      position: absolute
      bottom: 20px
      z-index: 1
      outline: none
      cursor: pointer
      width: 50px
      & svg
        max-width: 100%
      &--prev
        left: 50%
        margin-left: -100px
      &--next
        right: 50%
        margin-right: -100px

  @include media-tablet

  @include media-laptop
    height: 500px
    overflow: hidden

</style>
