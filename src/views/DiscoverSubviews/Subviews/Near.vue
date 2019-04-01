<template>
    <div>
        <div class="near" v-if="neardata">
            <!-- <div>
                <div v-for="(ele,index) in neardata" :key="index"  class="item">
                    <div class="title">
                        <div class="touxiang"><img style="width:80%" :src="ele.touxiang"></div>
                        <div class="address">
                            <p>{{ele.iname}}</p>
                            <p style="margin-top: 10px;color:#999">{{ele.address}}</p>
                        </div>
                        <div class="focus" >关注</div>
                    </div>
                    <p class="msg">{{ele.msg}}</p>
                    <div><img class="img" :src="ele.pic"></div>
                </div>
            </div> -->
            <Nearview v-for="(item,index) in neardata" :key="index" :ele="item"/>
            <Loadmore @onCostomEvent="loadmoreHandler"/>    
        </div>
        
    </div>
</template>
<script>
import Loadmore from "../../../components/Loadmore"
import Nearview from "../../../components/Nearview/nearview"
export default {
    name: "Near",
    data () {
        return {
            neardata: [],
        }
    },
    methods: {
        loadmoreHandler () {
            fetch(this.HOST + "/api/discoverdata")
            .then(res => res.json())
            .then(data => {
            this.neardata = this.neardata.concat(data.dynamic.near)})
        },
    },
    mounted () {
        fetch(this.HOST + "/api/discoverdata")
        .then(res => res.json())
        .then(data => {
            this.neardata = data.dynamic.near;
        })
    },
    components: {
        Loadmore,
        Nearview
    }
}
</script>
<style lang="less">
.near{
    margin-top: 98px;
    .item{
        padding: 15px 8px;
        background-color: #fff;
        margin-bottom:5px;
    }
    .title{
        overflow: hidden;
        margin-bottom: 15px;
    }
    .touxiang{
        width: 20%;
        float:left;
    }
    .address{
        float: left;
        padding: 10px 0;
    }
    .focus{
        width: 15%;
        float: right;
        margin-top: 20px;
        text-align: center;
    }
    .active{
        color: #ff0000;
    }
    .msg{
        margin: 10px 0;
        line-height: 2;
    }
    .img{
        width: 100%;
    }
}
</style>
