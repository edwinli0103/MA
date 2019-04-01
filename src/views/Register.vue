<template>
  <div class="login">
     <div class="login-wrapper">
        <img src="../assets/img-lh/zhucelogo.png" alt="">
        <div class="login-content">
          <ul>
            <li><i class="iconfont">&#xe607;</i><input type="text" placeholder="请输入手机号"></li>
            <li><i class="iconfont">&#xe661;</i><input type="text" placeholder="验证码"><a href="#" class='getyzm'>获取验证码</a></li>
            <li><i class="iconfont">&#xe607;</i><input type="password" placeholder="请输入密码"></li>
          </ul>
          <div class="login-button" @click="registerHandler">提交</div>
        </div>
     </div>
     <div :class='{tip : flag}' @click="tipHandler" class="default">
       <div>请输入正确的账号或验证码</div>
     </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      flag: false
    }
  },
  methods: {
    registerHandler () {
      let reg1 = /^1(3|4|5|7|8)\d{9}$/;
      let reg2 = /\w/;
      if(this.uname===''|| this.psd===''|| reg1.test(this.uname) !==true 
      || reg2.test(this.msg) !==true){
        this.flag = true;
      }else{
        this.$router.push('/login');
      }
    },
    tipHandler () {
      this.flag =false;
      this.$router.push('/register')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login{
  height: 100%;
  background: url('../assets/img-lh/zhuceye.png') no-repeat;
  background-size: cover;
}
.login-wrapper{
  text-align: center;
  padding-top: 90px;
  width: 270px;
  margin: 0 auto;
  .login-button{
    width:240px;
    height: 40px;
    line-height: 40px;
    margin: 0.8rem auto 0; 
    background-color:#FEE105;
    border-radius: 20px;
    color:#171818;
    font-size:0.38rem;
  }
}
.login-wrapper>img{
  width: 90px;
  margin-bottom: 60px;
}
.login-content li{
  width: 240px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  padding-bottom:3px;
  margin: 0 auto;
  position: relative;
  input{
    height: 30px;
    background-color: #171818;
    outline: none;
    border: none;
    color:#ccc;
    margin-left: 30px;
    position: relative;
    bottom:3px;
  }
  .getyzm{
      display: block;
      width: 35%;
      height: 45%;
      line-height: 20px;
      font-size:0.2rem;
      background-color:#FEE105;
      position: absolute;
      right: 6px;
      bottom: 9px;
      border-radius: 10px;
  }
  i{
    color:#FEE105;
    font-size: 28px;
    position: relative;
    top:2px;
  }
}
.default{
  display: none;
}
.tip{
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  position: absolute;
  top: 0;
  left: 0;
  div{
    width: 70%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-radius: 10px;
    background-color: #FEE105;
    position: absolute;
    left: 15%;
    top: 30%;
    font-size: 0.32rem;
    opacity: 0.8;
  }
}
</style>