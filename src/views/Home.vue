<template>
  <div>
    <div class="topnav">
      <ul>
        <li><router-link active-class="active" to="/home/sports">总运动</router-link></li>
        <li><router-link active-class="active" to="/home/walking">健走</router-link></li>
        <li><router-link active-class="active" to="/home/running">跑步</router-link></li>
        <li><router-link active-class="active" to="/home/riding">骑行</router-link></li>
        <li><i class="iconfont">&#xe819;</i></li>
      </ul>
    </div>
    <router-view></router-view>  
    <BottomNav />     
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav.vue"
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    BottomNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.topnav{
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    line-height: 50px;
    width: 100%;
    font-size: 16px;
    background-color: #171818;
    ul{
        display: flex;
        li{
            flex:1;
            text-align:center;
            color: #fff;
        }
        li:last-child{
          flex: 0.5;
        }
    }
}
.active{
    color:#FEE105;
}
.iconfont{
  font-size: 20px;
}
</style>
