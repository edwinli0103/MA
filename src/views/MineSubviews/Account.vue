<template>
  <div class="Account">
    <div class="Account_nav">
      <router-link to="/Myset">
        <img src="../../assets/img-lh/fanhui.png" alt>
      </router-link>设置
    </div>
    <div class="account_entry">你已使用新浪微博登录迈斯</div>
    <div class="account_phone">
      <p>手机号</p>
      <div @click="onClickHandler(1)">绑定</div>
    </div>
    <div class="account_default">
      <p>绑定手机号后可以直接使用手机号和密码登录迈斯</p>
      <p>第三方账号绑定</p>
    </div>
    <div class="account_fashion">
      <ul>
        <li>
          <p>微信</p>
          <div class="account_binding" @click="onClickHandler(2)">绑定</div>
        </li>
        <li>
          <p>微博</p>
          <div class="account_binding" @click="onClickHandler(3)">解除绑定</div>
        </li>
        <li>
          <p>Q Q</p>
          <div class="account_binding" @click="onClickHandler(4)">绑定</div>
        </li>
      </ul>
      <span>绑定第三方账号后可以多个账号任意登录迈斯</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Account",
  methods:{
      onClickHandler(data){
          if(data === 1){
              this.$router.push("/binding");
          };
          if(data === 2){
              window.open("https://weixin.qq.com/");
          };
          if(data === 3){
              window.open("https://weibo.com/");
          };
          if(data === 4){
              window.open("https://im.qq.com/mobileqq/");
          };
      }
  }
};
</script>
<style scoped lang="less">
.Account {
  .Account_nav {
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
  .account_entry {
    font-size: 0.24rem;
    color: #171818;
    margin-left: 0.21rem;
    margin-top: 0.3rem;
    margin-bottom: 0.29rem;
  }
  .account_phone {
    width: 100%;
    height: 1rem;
    background-color: #ffffff;
    position: relative;
    p {
      position: absolute;
      top: 0.34rem;
      left: 0.21rem;
      font-size: 0.3rem;
    }
    div {
      width: 1.5rem;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      position: absolute;
      top: 0.27rem;
      right: 0.21rem;
      color: #171818;
      font-size: 0.24rem;
      background-color: #fed906;
      border-radius: 0.25rem;
    }
  }
  .account_default {
    margin: 0.35rem 0;
    p {
      margin-left: 0.23rem;
      color: #171818;
      font-size: 0.24rem;
    }
    :first-child {
      margin-bottom: 0.76rem;
    }
  }
  .account_fashion {
    li {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      background-color: #ffffff;
      margin-bottom: 0.15rem;
      position: relative;
      p {
        position: absolute;
        left: 0.22rem;
        font-size: 0.3rem;
      }
      .account_binding {
        width: 1.5rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        position: absolute;
        top: 0.27rem;
        right: 0.21rem;
        color: #171818;
        background-color: #fed906;
        border-radius: 0.25rem;
        font-size: 0.24rem;
      }
    }
    span {
      color: #171818;
      font-size: 0.24rem;
      margin-left: 0.21rem;
      display: block;
      margin-top: 0.5rem;
    }
  }
}
</style>
