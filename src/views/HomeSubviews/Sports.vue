<template>
  <div class="Sports">
    <!-- 总运动黄色部分 -->
    <div class="Sports_head">
      <div class="head_clock">
        <span>今日打卡</span>
      </div>
      <div v-if="sportsData" class="head_header">
        <img :src="sportsData.touxiang">
      </div>
      <div class="head_label">MG.3</div>
      <div class="head_schedule">
        <div class="progressContainer">
          <div class="progress">
            <b>{{ progreess }}%</b>
          </div>
        </div>
      </div>
      <div class="head_writing">
        <span>在锻炼100分钟可升级为MG.4</span>
      </div>
    </div>

    <!-- 运动数据部分 -->
    <div class="Sports_body">
      <div class="Sports_movement">总运动</div>
      <span class="iconfont partakeOf">&#xe642;</span>
      <div class="body_circle" v-if="sportsData">
        <img src="../../assets/zn_img/circle.png" alt>
        <img src="../../assets/zn_img/yellowCircle.png" alt>
        <div class="circle_record">
          <p>{{ sportsData.allminute }}</p>
          <p>分钟</p>
          <p>打卡{{ sportsData.daka }}天</p>
        </div>
        <div class="body_week">
          <p>本周运动(分钟)</p>
          <p>{{ sportsData.weekminute }}</p>
        </div>
        <div class="body_hailFellow">
          <p>本周好友运动排名</p>
          <p>{{ sportsData.weekrank }}</p>
        </div>
      </div>
    </div>

    <!-- 推荐活动部分 -->
    <div class="Sports_foot">
      <div class="foot_recommend">推荐活动</div>
      <ul>
        <router-link tag="li" to="/fitdetails" class="foot_drill" v-for="(item,index) in sportsData.listimg" :key="index">
          <!-- <div>
                        {{ listimg.index }}
          </div>-->
          <img :src="item">
        </router-link>
      </ul>
    </div>
    <Loadmore @onCostomEvent="loadHandler"/>
  </div>
</template>
<script>
import Loadmore from "../../components/Loadmore"
import "../../assets/zn-css/font/iconfont.css";
export default {
  name: "Sports",
  data() {
    return {
      sportsData: {},
       progreess:60
      // sportsImg:[]
    };
  },
  methods :{
    loadHandler () {
      this.$axios({
      url: this.HOST + "/api/homedata",
      method: "get"
    }).then(res => {
      this.sportsData.listimg = this.sportsData.listimg.concat(res.data.sports.listimg);
    });
    }
  },
  mounted() {
    this.$axios({
      // url:"http://localhost:3000/api/homedata",
      url: this.HOST + "/api/homedata",
      method: "get"
    }).then(res => {
      // console.log(res.data.sports.listimg);
      this.sportsData = res.data.sports;
      // this.sportsImg = res.data.sports.listimg;
    });
  },
  components: {
    Loadmore
  }
};
</script>
<style scoped>
.Sports {
  margin-top: 50px;
}
.Sports_head {
  height: 65px;
  background-color: #fed906;
  position: relative;
}
.head_clock {
  position: absolute;
  width: 60.5px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  background-color: black;
  border-radius: 25px;
  color: #fed906;
  margin: 20.5px 300.5px 19.5px 14px;
}
.head_clock span {
  margin-left: 10px;
}
.head_header {
  width: 40px;
  height: 40px;
}
.head_header > img {
  width: 100%;
  /* position: absolute; */
  margin: 12px 247px 13px 88px;
}
.head_label {
  position: absolute;
  width: 41px;
  height: 14px;
  /* margin: 18px 198px 33px 136px; */
  font-size: 18px;
  left: 136px;
  top: 18px;
}
.head_schedule {
  position: absolute;
  width: 177px;
  height: 2.5px;
  /* margin: 23.5px 15px 39px 183px; */
  left: 183px;
  top: 14.5px;
}
/* .head_schedule > img:first-child {
  width: 100%;
}
.head_schedule > img:last-child {
  width: 140.5px;
  position: absolute;
  margin-top: -3.5px;
} */
.progressContainer {
  height: 10px;
  width: 96%;
  border-radius: 10px;
  background-color: #fff;
  margin-left: 2%;
}
.progreess {
  background-color: #171818;
  border-radius: 10px;
  width: 100px;
  height: 10px;
  line-height: 10px;
}
b {
  color: #fff;
  font-weight: 100;
  font-size: 12px;
  position: absolute;
  left: 40%;
}

.head_writing {
  position: absolute;
  width: 159px;
  height: 11.5px;
  /* margin: 34.5px 15.5px 19px 200.5px; */
  color: #171818;
  font-size: 12px;
  left: 200.5px;
  top: 34.5px;
}

/* 运动数据部分 */
.Sports_body {
  height: 243.5px;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
}
.Sports_movement {
  margin-top: 12px;
  margin-left: 10px;
  width: 52.5px;
  height: 17px;
  font-size: 17px;
  font-family: PingFang-SC-Medium;
  font-weight: 250;
  color: rgba(23, 24, 24, 1);
  line-height: 10.5px;
}
.Sports_body .partakeOf {
  position: absolute;
  width: 14px;
  height: 15px;
  top: 10px;
  right: 19.5px;
  font-size: 18px;
}
.body_circle {
  position: relative;
  width: 135px;
  height: 116px;
  /* margin: 15px 119.5px 88.5px 120.5px; */
  top: 15px;
  left: 120.5px;
}
.body_circle > img:nth-child(1) {
  width: 100%;
}
.body_circle > img:nth-child(2) {
  position: absolute;
  left: 0;
  top: 4px;
  width: 45.5px;
  height: 111.5px;
}
.circle_record {
  position: relative;
}
.circle_record > p:nth-child(1) {
  position: absolute;
  width: 64px;
  height: 22.5px;
  margin: -75px 36px 54.5px 35px;
  font-size: 30px;
}
.circle_record > p:nth-child(2) {
  position: absolute;
  width: 35.5px;
  height: 17px;
  font-size: 16px;
  top: -37.5px;
  right: 47.5px;
  /* margin: -79px 102px 60px 97px; */
}
.circle_record > p:nth-child(3) {
  position: absolute;
  width: 55px;
  height: 11.5px;
  font-size: 13px;
  right: 36.5px;
  /* margin: -9px 102px 60px 97px; */
}
.body_week {
  position: relative;
}
.body_week > p:nth-child(1) {
  position: absolute;
  width: 80px;
  height: 11.5px;
  font-size: 11px;
  left: -80px;
  top: 20px;
}
.body_week > p:nth-child(2) {
  position: absolute;
  width: 33.5px;
  height: 31.5px;
  font-size: 15px;
  left: -55px;
  top: 45px;
}
.body_hailFellow {
  position: relative;
}
.body_hailFellow > p:nth-child(1) {
  position: absolute;
  width: 96px;
  height: 11.5px;
  font-size: 11px;
  right: -68px;
  top: 19.5px;
}
.body_hailFellow > p:nth-child(2) {
  position: absolute;
  width: 31.5px;
  height: 31.5px;
  font-size: 15px;
  right: -41px;
  top: 44px;
}

/* 推荐活动部分 */
.Sports_foot {
  margin-top: 15px;
  /* width: 375px; */
  /* height: 270px; */
  background-color: #ffffff;
  overflow: hidden;
}
.foot_recommend {
  width: 66.5px;
  height: 16px;
  margin-top: 23px;
  margin-left: 9.5px;
  /* margin: 26px 598px 516px 19px; */
  color: #171818;
  font-size: 15px;
}
/* .Sports_foot>img{
    width: 363px;
    height: 173px;
    margin-left:6px;
    margin-top: 12.5px;
    display: block;
} */
.foot_drill {
  /* width: 363px; */
  height: 171.5px;
  margin-left: 5.5px;
  margin-right: 5.5px;
  margin-top: 0.2rem;
  margin-bottom: 0.4rem;
}
.foot_drill > img {
  width: 100%;
}
</style>


