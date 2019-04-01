<template>
    <div class="detail">
        <div class="head">
            <div @click="backHandler"><img src="../../assets/img-lh/fanhui.png" alt=""></div>
            <h2>教程详情</h2>
        </div>
        <div class="content">
            <video :src="url" controls></video>
        </div> 
        <div class='desc'>
            <p>健身教程视频，教你快速锻炼腹部肌肉<br>
                欢迎评论，指出不足之处。
            </p>
        </div>
        <div class="add" @click="addHandler">{{ keep }}</div>
    </div>
</template>
<script>
export default {
    name: "Fitdetails",
    data () {
        return {
            url: "",
            keep: "加入训练计划",
            flag: false
        }
    },
    methods: {
        backHandler () {
            window.history.back();
        },
        addHandler () {
            this.flag = !this.flag;
            if(this.flag) {
                this.keep = "已经加入计划"
            }else{
                this.keep = "加入训练计划"
            }
        }
    },
    mounted () {
        fetch(this.HOST + "/api/fitdetailsdata")
        .then(res => res.json())
        .then(data => {
            this.url = data.video;
        })
    }
}
</script>
<style scoped lang="less">
.detail{
    height: 100%;
    position: relative;
    background-color: #fff;
}
.head{
    height: 50px;
    line-height: 50px;
    color: #ffffff;
    background-color: #171818;
    padding: 0 10px;
    box-sizing: border-box;
    div{
        float: left;
        img{
            margin-top:15px;
            width: 78%;
        }
    }
    h2{
        float: left;
        width:30%;
        margin-left: 34%;
    }
}
.content{
    padding: 20px 2px;
    background-color: #888;
    video {
        width: 100%;
    }
}
.desc{
    padding: 10px;
    line-height: 2;
    p{
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }
}
.add{
    width: 50%;
    height: 6.5%;
    padding-top: 3%;
    box-sizing: border-box;
    background-color: #FEE105;
    position: absolute;
    bottom: 30px;
    left: 25%;
    border-radius: 15px;
    text-align: center;
    font-size: 0.4rem;
}
</style>

