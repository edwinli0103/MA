<template>
  <div class="walking" v-if="WalkingListData">
    <!-- 健走 -->
    <div class="sport">
      <div class="walking_size">
        <span>健走</span>
        <div class="walking_icon">
          <a href="#">
            <img src="../../assets/yx_imges/map.png" alt>
          </a>
          <a href="#">
            <img src="../../assets/yx_imges/set.png" alt>
          </a>
        </div>
      </div>
      <div class="walking_circle">
        <div class="walking_circle_style">
          <img src="../../assets/yx_imges/circle.png" alt>
          <img src="../../assets/yx_imges/yellowCircle.png" alt>
          <h3>{{ this.WalkingListData.footcount}}</h3>
          <span>步</span>
        </div>
      </div>
      <div class="walking_target">
        <span>目标:</span>
        <span>{{ this.WalkingListData.target}}</span>
      </div>
      <div class="walking_data">
        <p class="walk_punch">
          <span>打卡</span>
          <span>{{this.WalkingListData.daka}}</span>
        </p>
        <p class="walk_kilometrec">
          <span>公里</span>
          <span>{{ this.WalkingListData.kli }}</span>
        </p>
      </div>
      <div class="walking_btn">
        <span  @click="clickHandler" v-if="flag">开始</span>
        <span @click="clickHandler" v-else >暂停</span>
      </div>
    </div>
    <!-- 周好友健走排名 -->
    <div class="ranking">
      <p>周好友健走排名</p>
      <WalkingList :walkrankData = "WalkingListData.walkrank"/>
      <Loadmore @onCostomEvent="loadHandler"/>
    </div>
  </div>
</template>
<script>
import Loadmore from "../../components/Loadmore"
import WalkingList from "../../components/WalkingList";

export default {
  name: "Walking",
  data(){
    return{
      WalkingListData:{},
      flag:true
    }
  },
  components: {
    WalkingList,
    Loadmore
  },
  mounted() {
    fetch(this.HOST + "/api/homedata")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.WalkingListData = data.walking;
      });
  },
  methods:{
    loadHandler () {
      fetch(this.HOST + "/api/homedata")
      .then(res => res.json())
      .then(data => {
        this.WalkingListData.walkrank = this.WalkingListData.walkrank.concat(data.walking.walkrank);
      });
    },
    clickHandler(){
      this.flag = !this.flag
    }
  }
};
</script>
<style scoped>
.walking {
  margin-top: 50px;
}
.walking_size {
  padding-top: 10px;
}
.sport {
  /* width: 375px; */
  height: 308px;
  position: relative;
  background-color: #ffffff;
  margin-bottom: 10px;
}
.sport > .walking_size > span {
  margin-left: 10.5px;
  font-size: 17px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(23, 24, 24, 1);
  line-height: 21px;
}
.walking_icon {
  display: inline;
  float: right;
}
.walking_icon > a > img {
  width: 15px;
  height: 15px;
  margin-right: 15.75px;
}

.walking_circle_style {
  width: 135px;
  height: 116px;
  margin: 20.5px auto;
  position: relative;
}
.walking_circle_style > img:first-child {
  width: 135px;
  height: 116px;
}
.walking_circle_style > img:nth-child(2) {
  width: 45.5px;
  height: 111.5px;
  position: absolute;
  top: 4px;
  left: -1px;
}
.walking_circle_style > h3 {
  font-size: 30px;
  position: absolute;
  top: 39px;
  left: 34px;
}
.walking_circle_style > span {
  font-size: 18px;
  position: absolute;
  left: 59px;
  top: 69px;
}
.walking_target {
  font-size: 12px;
  position: absolute;
  top: 162px;
  left: 177px;
}
.walking_data {
  width: 100%;
  height: 5px;
}

.walk_punch .walk_kilometrec {
  font-size: 12px;
}
.walk_punch {
  position: absolute;
  top: 191.5px;
  left: 138.5px;
}
.walk_punch > span {
  display: block;
  margin-bottom: 2px;
}
.walk_kilometrec {
  position: absolute;
  top: 191.5px;
  right: 138.5px;
}
.walk_kilometrec > span {
  display: block;
  margin-bottom: 2px;
}
.walking_btn {
  width: 200px;
  height: 40px;
  border-radius: 20px;
  background-color: #fed906;
  line-height: 40px;
  text-align: center;

  margin: 56px auto;
}
/* 周好友排名健走 */
.ranking {
  background-color: #ffffff;
  overflow: hidden;
}
.ranking > p {
  
  font-family: PingFang-SC-Medium;
  font-size: 16px;
  margin: 12px 10.5px;
  font-weight: 500;
  color: rgba(23, 24, 24, 1);
}
</style>


