<template>
    <div class="personal">
        <div class="personal_nav">
            <router-link to="/Mine">
                <img src="../../assets/img-lh/fanhui.png" alt>
            </router-link>
            个人资料
        </div>
        <div class="personal_material">
            <span>头像</span>
            <img src="../../assets/img-lh/home-touxiang.png" alt="">
        </div>
        <div class="personal_name">
            <p>昵称</p>
            <p>七月上</p>
        </div>
        <div class="personal_six">
            <p>性别</p>
            <p>女</p>
        </div>
        <div class="personal_signature">
            <p>签名</p>
            <p>汗水的魅力永远大于香水！</p>
        </div>
         <div class="personal_birthday">
            <p>生日</p>
            <p>1997.12.28</p>
        </div>
        <div class="personal_city">
            <p>所在城市</p>
            <p>北京-海淀区</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "Personal"
}
</script>
<style scoped lang="less">
.personal_nav{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background-color: #171818;
    color: #FFFFFF;
    font-size: 0.34rem;
    position: relative;
    margin-bottom: 0.15rem;
    img{
        width: 0.27rem;
        height: 0.28rem;
        position: absolute;
        top: 0.26rem;
        left: 0.2rem;
    }
}
.personal_material{
    width: 100%;
    height: 1.5rem;
    background-color: #FFFFFF;
    float: left;
    position: relative;
    margin-bottom: 0.02rem;
    span{
        width: 0.6rem;
        height: 0.28;
        color: #171818;
        font-size: 0.3rem;
        margin-left: 0.21rem;
        margin-top:0.59rem;
        display: block;
    }
    img{
        width: 0.96rem;
        height: 0.96rem;
        right: 0.21rem;
        top: 0.27rem;
        position: absolute;
    }
}
.personal_name{
    position: relative;
    font-size: 0.3rem;
    color: #171818;
    width: 100%;
    height: 1rem;
    top:1.6rem;
    background-color: #fff;
    p:first-child{
        position: absolute;
        top: 0.34rem;
        left: 0.22rem;
    }
    p:last-child{
        position: absolute;
        top: 0.34rem;
        right: 0.21rem;
    }
}
.personal_six{
    position: relative;
    font-size: 0.3rem;
    color: #171818;
    width: 100%;
    height: 1rem;
    top:1.6rem;
    background-color: #fff;
    p:first-child{
        position: absolute;
        top: 0.34rem;
        left: 0.22rem;
    }
    p:last-child{
        position: absolute;
        top: 0.34rem;
        right: 0.21rem;
    }
}
.personal_signature{
    position: relative;
    font-size: 0.3rem;
    color: #171818;
    width: 100%;
    height: 1rem;
    top:1.6rem;
    background-color: #fff;
    p:first-child{
        position: absolute;
        top: 0.34rem;
        left: 0.22rem;
    }
    p:last-child{
        position: absolute;
        top: 0.34rem;
        right: 0.21rem;
    }
}
.personal_birthday{
    position: relative;
    font-size: 0.3rem;
    color: #171818;
    width: 100%;
    height: 1rem;
    top:1.6rem;
    background-color: #fff;
    margin-top: 0.15rem;
    p:first-child{
        position: absolute;
        top: 0.34rem;
        left: 0.22rem;
    }
    p:last-child{
        position: absolute;
        top: 0.34rem;
        right: 0.21rem;
    }
}
.personal_city{
    position: relative;
    font-size: 0.3rem;
    color: #171818;
    width: 100%;
    height: 1rem;
    top:1.6rem;
    background-color: #fff;
    p:first-child{
        position: absolute;
        top: 0.34rem;
        left: 0.22rem;
    }
    p:last-child{
        position: absolute;
        top: 0.34rem;
        right: 0.21rem;
    }
}
</style>
