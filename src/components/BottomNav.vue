<template>
    <div>
        <div class="bottomnav">
            <ul>
                <li>
                    <router-link  active-class="active" to="/home">
                        <i class="iconfont">&#xe63d;</i><br/><span>首页</span>
                    </router-link>
                </li>
                <li>
                    <router-link active-class="active" to="/fitness">
                        <i class="iconfont">&#xe618;</i><br/><span>健身</span>
                    </router-link>
                </li>
                <li>
                    <router-link active-class="active" to="/discover">
                        <i class="iconfont">&#xe616;</i><br/><span>发现</span>
                    </router-link>
                </li>
                <li>
                    <router-link active-class="active" to="/mine">
                        <i class="iconfont">&#xe60b;</i><br/><span>我的</span>
                    </router-link>
                </li>
            </ul>    
        </div>    
    </div>
   
</template>
<script>
import "../assets/css-lh/iconfont.css"
export default {
    name: "BottomNav",
    
}
</script>
<style scoped lang='less'>
.bottomnav{
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 100%;
    font-size: 12px;
    background-color: #171818;
    padding-top: 5px;
    box-sizing: border-box;
    ul{
        display: flex;
        li{
            flex:1;
            text-align:center;
            color: #ccc;
            i{
                font-size: 26px;
            }
            span{
                margin-top: 3px;
            }
        }
    }

}
.active{
    color:#FEE105;
}
</style>

