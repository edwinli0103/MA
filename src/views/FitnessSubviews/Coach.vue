<template>
  <div class="coach">
    <div class="coach_head">
      <p>专属教练任性约</p>
    </div>
    <div>
      <ul>
        <li v-for="(item,index) in coachData" :key="index" class="coach_category">
          <div class="coach_header">
            <img :src="item.pic">
          </div>
          <div class="category_introduce">
            <p>{{ item.name }}</p>
            <p>{{ item.rank }}</p>
          </div>
          <div class="category_subscribe">预约</div>
        </li>
      </ul>
    </div>
    <Loadmore @onCostomEvent="loadmoreHandler"/>
  </div>
</template>
<script>
import Loadmore from "../../components/Loadmore";
export default {
  name: "Coach",
  data() {
    return {
      coachData: []
    };
  },
  mounted() {
    this.$axios({
      url: this.HOST + "/api/fitnessdata",
      method: "get"
    }).then(res => {
      // console.log(res.data.coach.coachlist);
      this.coachData = res.data.coach.coachlist;
    });
  },
  methods: {
    loadmoreHandler () {
      this.$axios({
      url: this.HOST + "/api/fitnessdata",
      method: "get"
      }).then(res => {
        this.coachData = this.coachData.concat(res.data.coach.coachlist);
      });
    }
  },
  components: {
    Loadmore
  }
};
</script>
<style scoped lang="less">
.coach {
  margin-bottom: 50px;
  .coach_head {
    margin-top: 50px;
    width: 100%;
    height: 0.9rem;
    background-color: #ffffffff;
    border-bottom: 0.01rem solid #000000;
    p {
      line-height: 0.9rem;
      font-size: 0.34rem;
      margin-top: 0.3rem;
      margin-left: 2.52rem;
    }
  }
  .coach_category {
    width: 100%;
    height: 1.2rem;
    background-color: #ffffffff;
    position: relative;
    margin-bottom: 0.13rem;
    .coach_header {
      width: 0.8rem;
      height: 0.8rem;
      margin-bottom: 0.19rem;
      margin-left: 0.21rem;
      img {
        width: 100%;
        height: 100%;
        margin-top: 0.21rem;
        border-radius: 50%;
      }
    }
    .category_introduce {
      width: 3.7rem;
      height: 0.8rem;
      // background-color: aqua;
      position: absolute;
      bottom: 0.19rem;
      left: 1.25rem;
      color: #171818;
      p:first-child {
        height: 0.28rem;
        margin-top: 0.15rem;
        font-size: 0.3rem;
      }
      p:last-child {
        margin-top: 0.15rem;
        height: 0.23rem;
        margin-bottom: 0.24rem;
        font-size: 0.24rem;
      }
    }
    .category_subscribe {
      width: 1.35rem;
      height: 0.5rem;
      text-align: center;
      padding-top: 0.12rem;
      box-sizing: border-box;
      border-radius: 0.25rem;
      background-color: #fed906;
      float: right;
      margin-right: 0.22rem;
      margin-top: -0.59rem;
    }
  }
  
}
</style>
