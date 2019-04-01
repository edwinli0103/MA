<template>
  <div>
    <div class="mine_head">
      <router-link to="/Myset">
        <a href="#"><img src="../assets/yx_imges/set.png"></a>
      </router-link>
    </div>
    <div class="mine_body">
      <div class="mine_body_head">
        <img src="../assets/zn_img/home-xiang.png" alt="">
      </div>
      <p>七月上</p>
      <p>汗水的魅力永远大于香水</p>
      <router-link to="/Personal" href="#" class="personalData">></router-link>
    </div>
    <div class="mine_message">消息通知</div>
    <div class="mine_centre">
      <ul>
        <li>数据中心</li>
        <li>我的目标</li>
        <li>步数记录</li>
        <li>打卡记录</li>
      </ul>
    </div>
    <div class="mine_foot">
      <ul>
        <li>健身历史</li>
        <li>运动路线</li>
        <li>收藏</li>
      </ul>
    </div>
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav.vue"
export default {
  name: "Mine",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components:{
    BottomNav
  } 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mine_head {
  width: 100%;
  height: 1rem;
  background-color: #171818;
  img{
    float:right;
    background-color: #FFFFFF;
    width: 0.27rem;
    height: 0.27rem;
    margin-top: 0.37rem;
    margin-right: 0.38rem;
  }
}
.mine_body {
  width: 100%;
  height: 2.8rem;
  background-color: #fed906;
  position: relative;
  .mine_body_head {
    width: 1.44rem;
    height: 1.44rem;
    position: absolute;
    top: 0.68rem;
    left: 0.2rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  p:nth-child(2) {
    width: 1.25rem;
    height: 0.38rem;
    // background-color: aquamarine;
    font-size: 0.4rem;
    position: absolute;
    top:0.94rem;
    left: 1.85rem;
    color: #171818;
  }
  p:nth-child(3){
    width: 3.58rem;
    height: 0.29rem;
    // background-color: brown;
    position: absolute;
    top:1.56rem;
    left: 1.88rem;
    color: #171818;
    font-size: 0.3rem;
  }
  .personalData{
    color:#555555;
    width: 0.12rem;
    height: 0.23rem;
    font-weight: 600;
    position: absolute;
    top:1.28rem;
    right: 0.22rem;
  }
}
.mine_message{
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background-color: #FFFFFF;
  padding-left: 0.2rem;
  color: #171818;
  font-size: 0.3rem;
}
.mine_centre{
  margin-top: 0.15rem;
  width: 100%;
  height: 4.08rem;
  
  li{
    height: 1.02rem;
    line-height: 1.02rem;
    margin-bottom:0.02rem;
    color: #171818;
    background-color: #FFFFFF;
    font-size:0.3rem;
    padding-left: 0.21rem;
  }
}
.mine_foot{
  height: 3.06rem;
  margin-top: 0.25rem;
  li{
    background-color: #FFFFFF;
    height: 1.02rem;
    line-height: 1.02rem;
    margin-bottom:0.02rem;
    color: #171818;
    font-size:0.3rem;
    padding-left: 0.21rem;
  }
}
</style>
