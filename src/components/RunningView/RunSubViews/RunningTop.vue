<template>
  <div class="running-content">
    <div class="runsub-top">
      <span class="icon iconfont" @click="backHandler">&#xe616;</span>
    </div>
  </div>
</template>
<script>
import "../../../assets/RunningIcon/iconfont.css";
export default {
  name: "RunningTop",
  methods: {
    backHandler() {
      window.history.back();
    }
  }
};
</script>
<style scoped lang="less">
.running-content {
  width: 100%;
  .runsub-top {
    background-color: #000;
    width: 100%;
    height: 0.88rem;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 888;

    .icon {
      display: block;
      width: 0.27rem;
      height: 0.28rem;
      color: rgb(255, 255, 255);
      position: absolute;
      top: 0.26rem;
      left: 0.2rem;
    }
  }
}
</style>
