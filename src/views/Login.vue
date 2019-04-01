<template>
  <div class="login">
     <div class="login-wrapper">
        <img src="../assets/img-lh/zhucelogo.png" alt="">
        <div class="login-content">
          <ul>
            <li><i class="iconfont">&#xe607;</i><input type="text" v-model="uname" placeholder="请输入账号"></li>
            <li><i class="iconfont">&#xe661;</i><input type="password" v-model="psd" placeholder="请输入密码"></li>
          </ul>
          <div class="register">
            <router-link to="/register">立即注册</router-link>
            <a href="#">忘记密码</a>
          </div>
          <div class="login-button" @click="loginHandler">登录</div>
        </div>
        <div class="other"><img src="../assets/img-lh/disanfang.png" alt=""></div>
     </div>
     <div :class='{tip : flag}' @click="tipHandler" class="default">
       <div>请输入正确的账号或密码</div>
     </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex"
export default {
  name: 'Login',
  data () {
    return {
      uname:'',
      psd: '',
      flag: false,
    }
  },
  methods: {
    ...mapMutations(["setinfo", "updateinfo"]),
    loginHandler () {
      let reg1 = /^1(3|4|5|7|8)\d{9}$/;
      let reg2 = /\w/;
      if(this.uname===''|| this.psd===''|| reg1.test(this.uname) !==true 
      || reg2.test(this.msg) !==true){
        this.flag = true;
      }else{
        this.$router.replace('/home');
      }
      this.setinfo({
        x: this.uname,
        y: this.psd
      });
    },
    tipHandler () {
      this.flag =false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login{
  position: relative;
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
    margin: 0.5rem auto 0; 
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
.login-content .register{
  width: 240px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
}
.login-content .register a{
  color: #ccc;
}
.login-content .register a:first-child{
  float: left;
}
.login-content .register a:last-child{
  float: right;
}
.login-content li{
  width: 240px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  padding-bottom:3px;
  margin: 0 auto;
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
  i{
    color:#FEE105;
    font-size: 28px;
    position: relative;
    top:2px;
  }
}
.other{
  width: 260/50rem;
  height: 80/50rem;
  margin:70/50rem auto 0;
}
.other img{
  width: 100%;
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
