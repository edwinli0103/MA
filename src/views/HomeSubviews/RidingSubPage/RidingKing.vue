<template>
  <div class="ranking">
    <p>周好友健走排名</p>
    <div>
      <img :src="RankingData.touxiang" alt>
    </div>
    <ul>
      <li v-for="(item,key,index) in RankingData" :key="index">
        <span class="Top-num">{{ key + 1}}</span>
        <img :src="item.touxiang" alt>
        <span class="user-name">{{ item.name }}</span>
        <span class="user-mileage">{{ item.kli }}公里</span>
      </li>
    </ul>
    <Loadmore @onCostomEvent="loadHandler"/>
  </div>
</template>
<script>
import Loadmore from "../../../components/Loadmore"
export default {
  name: "Ridingking",
  data() {
    return {
      RankingData: []
    };
  },
  methods: {
    loadHandler () {
      this.$axios({
        url: this.HOST + "/api/homedata",
        method: "get"
      }).then(res => {
        this.RankingData = this.RankingData.concat(res.data.running.walkrank);
      });
    }
  },
  mounted() {
    this.$axios({
      url: this.HOST + "/api/homedata",
      method: "get"
    }).then(res => {
      this.RankingData = res.data.running.walkrank;
    });
  },
  components: {
    Loadmore
  }
};
</script>
<style scoped lang="less">
.ranking {
  background-color: #fff;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  p {
    height: 0.66rem;
    font-size: 17px;
    font-family: PingFang-SC-Medium;
    font-weight: 600;
    color: rgba(23, 24, 24, 1);
    line-height: 0.66rem;
    margin-left: 0.34rem;
  }
  ul {
    li {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      margin-bottom: 0.28rem;
      span {
        display: block;
        height: 0.8rem;
        line-height: 0.8rem;
        float: left;
        font-size: 0.3rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(23, 24, 24, 1);
      }
      .Top-num {
        margin-left: 0.22rem;
        margin-right: 0.22rem;
        font-weight: bold;
      }
      .user-name {
        margin-left: 0.4rem;
        
      }
      .user-mileage {
        float: right;
        margin-right: 0.42rem;
      }
      img {
        width: 0.8rem;
        float: left;
      }
    }
  }
}
</style>
