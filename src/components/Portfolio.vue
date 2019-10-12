<template>
  <v-layout wrap justify-center>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(portfolio ,index) in portfolios" :key="index">
          <v-card wrap hover :href="portfolio.url">
            <v-img :src="portfolio.src" height="200px" />
            <v-card-title>
              <b>
                <p class="card-title">{{ portfolio.title }}</p>
              </b>
            </v-card-title>
          </v-card>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </v-layout>
</template>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
}

.swiper-pagination {
  margin-top: 500px;
}

.card-title {
  font-size: 1em;
  color: #696969;
}
</style>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }
      },
      portfolios: [
        {
          title: "大谷翔平速報Bot",
          url: "https://twitter.com/TodaysShohei",
          src: require("@/assets/images/notify_ohtani_bot.png")
        },
        {
          title: "プロ野球速報Bot",
          url: "https://qiita.com/ykoba16/items/b7e916960898f816588c",
          src: require("@/assets/images/notify_game_result.png")
        },
        {
          title: "体重計記録＋通知",
          url: "https://qiita.com/ykoba16/items/55ae29f313ee75f3039b",
          src: require("@/assets/images/notify_weight.png")
        }
      ]
    };
  }
};
</script>