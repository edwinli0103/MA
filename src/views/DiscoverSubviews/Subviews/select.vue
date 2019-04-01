<template>
  <div class="select">
    <div class="select_RotationChart">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in selectData.lunbotu" :key="index">
            <img :src="slide">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
    <p>热门精选</p>
    <router-link to="/fitdetails" tag="div" v-for="(itme,index) in selectData.hotselect" :key="index" class="select_broadcast">
      <img :src="itme">
    </router-link>
    <Loadmore @onCostomEvent="loadHandler"/>
  </div>
</template>
<script>
import Loadmore from "../../../components/Loadmore"
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Select",
  data() {
    return {
      selectData: {},
      swiperOption:{
        pagination: {
          el: ".swiper-pagination"
        },
        //可选选项，自动滑动
        autoplay: true,
        // 循环滚动
        loop : true
      }
    };
  },
  methods: {
    loadHandler () {
      this.$axios({
        url: this.HOST + "/api/discoverdata",
        method: "get"
      })
      .then(res => {
        this.selectData.hotselect = this.selectData.hotselect.concat(res.data.cover.select.hotselect)  ;
      });
    }
  },
  mounted() {
    this.$axios({
      url: this.HOST + "/api/discoverdata",
      method: "get"
    })
    .then(res => {
      this.selectData = res.data.cover.select;
    });
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide,
    Loadmore
  }
};
</script>
<style scoped lang="less">
.select {
  margin-top: 90px;
  .select_RotationChart {
    width: 100%;
    height: 3.5rem;
    img{
        width: 100%;
        height: 100%;
    }
  }
  p {
    font-size: 0.3rem;
    color: #171818;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.17rem;
  }
  .select_broadcast {
    // width: 7.26rem;
    height: 3.46rem;
    margin: 0 0.12rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
