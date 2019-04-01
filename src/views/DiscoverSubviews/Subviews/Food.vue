<template>
  <div class="food">
    <div>
      <img :src="foodData.toppic" alt>
      <h5>健身美食餐</h5>
    </div>
    <div class="foodBox">
      <div class="foodLeft" v-for="(item,index) in foodData.good" :key="index">
        <img :src="item.pic" alt class="foodImg">
        <div class="touxiangDiv">
          <img :src="item.touxiang" alt class="touXiang">
        </div>
        <p>{{ item.iname}}</p>
        <div class="text">{{ item.msg }}</div>
        <div class="like">
          <p class="likeLeft">
            <img src="../../../assets/yx_imges/stat1.png" alt>
            <span>{{item.star}}</span>
          </p>
          <p class="likeRight">
            <img src="../../../assets/yx_imges/start2.png" alt>
            <span>{{item.pinglun}}</span>
          </p>
        </div>
      </div>
      <Loadmore @onCostomEvent="loadHandler"/>
    </div>
  </div>
</template>
<script>
import Loadmore from "../../../components/Loadmore"
export default {
  name: "Food",
  data() {
    return {
      foodData: {}
    };
  },
  methods: {
    loadHandler () {
      this.$axios({
        url: this.HOST + "/api/discoverdata",
        method: "get"
      }).then(res => {
        this.foodData.good = this.foodData.good.concat(res.data.cover.food.good);
    });
    }
  },
  mounted() {
    this.$axios({
      url: this.HOST + "/api/discoverdata",
      method: "get"
    }).then(res => {
      this.foodData = res.data.cover.food;
    });
  },
  components: {
    Loadmore
  }
};
</script>
<style scoped lang="less">
.food {
  margin-top: 90px;
  background-color: #ffffff;
  div {
    background-color: #ffffff;
    img {
      width: 100%;
    }
    h5 {
      width: 1.54rem;
      height: 0.29rem;
      font-size: 0.3rem;
      color: rgba(23, 24, 24, 1);
      margin: 0.21rem;
      font-family: "PingFang-SC-Medium";
    }
  }
  .foodBox {
    width: 100%;
    background-color: #ffffff;
    padding: 0 2%;
    overflow: hidden;
    .foodLeft:nth-child(2n) {
      margin-left: 2%;
    }
    .foodLeft {
      width: 47%;
      float: left;
      margin-bottom: 8px;
      .touXiang {
        width: 0.44rem;
        margin-right: 0.24rem;
        margin-top: 5px;
      }

      .touxiangDiv {
        float: left;
      }
      p {
        height: 0.44rem;
        line-height: 0.44rem;
        font-size: 0.28rem;
        margin-top: 5px;
        color: #8b8c8c;
      }
      .text {
        width: 3.03rem;
        height: 0.61rem;
        line-height: 0.35rem;
        clear: both;
        font-size: 0.28rem;
        margin-top: 6px;
      }
      .like {
        width: 100%;
        height: 0.32rem;
        margin: 6px 0;
        .likeLeft {
          width: 50%;
          float: left;
          img {
            width: 0.36rem;
          }
        }
        .likeRight{
           width: 30%;
           float: right;
           img{
             width: 0.36rem;
           }
        }
      }
    }
  }
}
</style>
