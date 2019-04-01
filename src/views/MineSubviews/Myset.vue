<template>
  <div class="mySet">
    <div class="mySet_nav">
      <router-link to="/Personal">
        <img src="../../assets/img-lh/fanhui.png" alt>
      </router-link>设置
    </div>
    <p>个人资料</p>
    <router-link to="/Account">
      <p>账号管理</p>
    </router-link>
    <p>缓存管理</p>
    <p>检查更新</p>
    <div class="mySet_ESC">
      <router-link to="/Login">
          <span class="mySet_ESC_P">退出登录</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Myset"
};
</script>
<style scoped lang="less">
.mySet {
  .mySet_nav {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background-color: #171818;
    color: #ffffff;
    font-size: 0.34rem;
    position: relative;
    margin-bottom: 0.15rem;
    img {
      width: 0.27rem;
      height: 0.28rem;
      position: absolute;
      top: 0.26rem;
      left: 0.2rem;
    }
  }
  p {
    font-size: 0.3rem;
    color: #171818;
    padding-left: 0.21rem;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    margin-top: 0.15rem;
    background-color: #fff;
  }
  .mySet_ESC {
    width: 5rem;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    border: 1px solid rgba(139, 140, 140, 1);
    margin-top: 50px;
    margin-left: 1.25rem;
    border-radius: 0.45rem;
      .mySet_ESC_p{
          color: #171818;
          font-size:0.36rem;
          text-align: center;
      }
  }
}
</style>
