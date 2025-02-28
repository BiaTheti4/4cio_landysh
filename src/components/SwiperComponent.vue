<template>
  <div class="swiper" ref="swiperContainer">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>

  </div>
</template>

<script>
import Swiper from 'swiper'; // Используем основной модуль Swiper
import 'swiper/swiper-bundle.css'; // Подключаем стили

export default {
  name: 'SwiperComponent',
  props: {
    options: {
      type: Object,
      default: () => ({
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }),
    },
  },
  data() {
    return {
      swiperInstance: null,
    };
  },
  mounted() {
    this.initSwiper();
  },
  beforeDestroy() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy();
    }
  },
  methods: {
    initSwiper() {
      // Инициализируем Swiper с переданными опциями
      this.swiperInstance = new Swiper(this.$refs.swiperContainer, this.options);
    },
    updateSwiper() {
      if (this.swiperInstance) {
        this.swiperInstance.update(); // Обновляем слайдер при изменении контента
      }
    },
  },
  watch: {
    options: {
      deep: true,
      handler() {
        this.$nextTick(() => {
          if (this.swiperInstance) {
            this.swiperInstance.destroy();
            this.initSwiper();
          }
        });
      },
    },
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

.swiper-pagination {
  position: relative;
  margin-top: 20px;
}

</style>