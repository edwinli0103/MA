<template>
    <div ref="load" class="loadmore">
        <div>正在加载数据......</div>
    </div>
</template>
<script>
export default {
    name: 'Loadmore',
    data () {
        return {
        }
    },
    mounted () {
        // 获取元素
        const load = this.$refs.load;
        // 获取滚动高度
        var scrollHeight = document.documentElement.scrollTop;
        // 获取视口的高度
        let winHeight = document.documentElement.clientHeight;
        var timer = null;
        var _this = this;
        function callback () {
            let top = load.getBoundingClientRect().top;
            if(top <= winHeight) {
                // 再次请求数据
                _this.$emit("onCostomEvent")
            }
        }
        window.addEventListener("scroll", function(event) {
            if(timer){
                clearTimeout(timer);
            }
            timer = setTimeout(function(){
                callback();
            }, 300)
        })
    }    
}
</script>
<style scoped>
.loadmore{
    height: 80px;
    text-align: center;
}
</style>

