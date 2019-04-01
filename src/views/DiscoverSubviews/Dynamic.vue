<template>
    <div>
        <div class="topnav">
            <ul>
                <li><router-link active-class="active" to="/discover/dynamic/fitcircle">健身圈</router-link></li>
                <li><router-link active-class="active" to="/discover/dynamic/focus">关注</router-link></li>
                <li><router-link active-class="active" to="/discover/dynamic/near">附近</router-link></li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "Dynamic"
}
</script>
<style scoped lang='less'>
.topnav{
    z-index: 999;
    position: fixed;
    top: 50px;
    left: 0;
    height: 40px;
    line-height: 40px;
    width: 100%;
    font-size: 16px;
    background-color: #fff;
    ul{
        display: flex;
        li{
            flex:1;
            text-align:center;
            color: #888;
            font-weight: 550;
        }
    }
}
.active{
    color:#000;
}
</style>
