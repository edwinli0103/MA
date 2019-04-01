<template>
    <div>
        <div class="item">
                    <div class="title">
                        <div class="touxiang"><img style="width:80%" :src="ele.touxiang"></div>
                        <div class="address">
                            <p>{{ele.iname}}</p>
                            <p style="margin-top: 10px;color:#999">{{ele.address}}</p>
                        </div>
                        <div class="focus" :class='{active: flag}' @click="focusHandler">{{keep}}</div>
                    </div>
                    <p class="msg">{{ele.msg}}</p>
                    <div><img class="img" :src="ele.pic"></div>
        </div>
    </div>
    
</template>
<script>
export default {
    name: "Nearview", 
    data () {
        return {
            keep: "关注",
            flag: false
        }
    },
    methods: {
        focusHandler () {
            this.flag = !this.flag;
            if(this.flag === true){
                this.keep = "已关注"
            }else{
                this.keep = "关注"
            }
            
        }
    },
    props: {
        ele: {
            type: Object
        }
    }
}
</script>
<style scoped>
.active {
    color: red
}
</style>


