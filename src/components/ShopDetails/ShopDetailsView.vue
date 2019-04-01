<template>
  <div v-if="detailsData">
    <div class="shopDetails" v-if="detailsData">
      <div>
        <img :src="detailsData.pic" alt>
      </div>
      <p>{{detailsData.msg}}</p>
      <p>¥ {{detailsData.price}}</p>
    </div>
    <div class="start-pause" @click="backHandler">返回</div>
  </div>
</template>
<script>
export default {
  name: "ShopDetails",
  data() {
    return {
      detailsData: [],
      currentIndex: 0
    };
  },
   methods: {
    backHandler() {
      window.history.back();
    }
  },
  mounted() {
    this.$axios({
      url: this.HOST + "/api/discoverdata",
      method: "get"
    }).then(res => {
      this.detailsData =
        res.data.cover.shop.hot[this.$route.params.currentIndex];
    });
  }
};
</script>
<style scoped lang="less">
.shopDetails {
  width: 100%;
  div {
    width: 100%;
    img {
      width: 100%;
    }
  }
  p {
    font-size: 0.5rem;
    margin-top: 0.3rem;
  }
}
.start-pause {
  width: 70px;
  height: 20px;
  font-size: 7.5px;
  font-weight: 500;
  text-align: center;
  line-height: 20px;
  color: rgba(23, 24, 24, 1);
  background: rgba(254, 217, 6, 1);
  border-radius: 20px;
}
</style>
