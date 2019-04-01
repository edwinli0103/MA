<template>
    <div class="swiper-size shopSwiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in swiperData" :key="index">
          <img :src="item" alt>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "ShopSwiper",
  data() {
    return {
      swiperData: [],
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    this.$axios({
      url: this.HOST + "/api//discoverdata",
      method: "get"
    }).then(res => {
      this.swiperData = res.data.cover.select.lunbotu;
    });
  }
};
</script>
<style scoped lang="less">
.shopSwiper{
  width: 100%;
  img{
    width: 100%;
  }
}
</style>
