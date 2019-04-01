<template>
  <div class="recmment-info">
    <p>爆 款 推 荐</p>
    <ul>
      <li v-for="(item,index) in recmmentData" :key="index" @click="clickHandler(index)">
        <div>
          <div>
            <img :src="item.pic" alt>
          </div>
          <p>{{item.msg}}</p>
          <p>¥ {{ item.price }}</p>
        </div>
      </li>
    </ul>
    <Loadmore @onCostomEvent="loadHandler"/>
  </div>
</template>
<script>
import Loadmore from "../Loadmore"
export default {
  name: "RecmmentList",
  data() {
    return {
      recmmentData: []
    };
  },
  mounted() {
    this.$axios({
      url: this.HOST + "/api/discoverdata",
      method: "get"
    }).then(res => {
      this.recmmentData = res.data.cover.shop.hot;
    });
  },
  methods: {

    loadHandler () {
      this.$axios({
        url: this.HOST + "/api/discoverdata",
        method: "get"
      }).then(res => {
        this.recmmentData = this.recmmentData.concat(res.data.cover.shop.hot) ;
      });
    },
  
    clickHandler(index) {
      this.$router.push({
        name: "ShopDetails",
        params: { currentIndex: index }
      });
    }
  },
  components: {
    Loadmore
  }
};
</script>
<style scoped lang="less">
.recmment-info {
  width: 100%;
  background-color: #fff;
  padding-bottom: 1rem;
  overflow: hidden;
  p {
    font-size: 0.4rem;
    color: rgba(23, 24, 24, 1);
    margin-left: 0.22rem;
    padding-top: 0.5rem;
  }
  ul {
    width: 100%;
    margin-left: 0.21rem;
    margin-right: 0.21rem;
    padding-top: 0.25rem;
    overflow: hidden;
    li {
      width: 2.23rem;
      float: left;
      margin-right: 0.2rem;
      div {
        width: 2.23rem;
        div {
          width: 2.23rem;
          height: 2.23rem;
          img {
            width: 100%;
          }
        }
        p {
          width: 100%;
          height: 0.53rem;
          font-size: 0.3rem;
          font-weight: 500;
          color: rgba(23, 24, 24, 1);
          margin-left: 0;
        }
      }
    }
  }
}
</style>
