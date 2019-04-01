<template>
  <div>
    <div class="topnav">
      <ul>
        <li><router-link active-class="active" to="/discover/cover">发现</router-link></li>
        <li><router-link active-class="active" to="/discover/dynamic">动态</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
    <BottomNav/>
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav.vue"

export default {
  name: 'Discover',
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
    font-size: 19px;
    background-color: #171818;
    ul{
        display: flex;
        li{
            flex:1;
            text-align:center;
            color: #fff;
        }
    }
}
.active{
    color:#FEE105;
}
</style>
