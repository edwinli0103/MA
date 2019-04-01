<template>
  <div class="Runrecord">
    <RunningTop/>
    <span class="set-title">我的跑步记录</span>
    <ul>
      <li v-for="(item,index) in RecordData" :key="index">
        <div class="record-time">
          {{item.time}}
          {{runDate}}
        </div>
        <div class="Runrecord-kil">户外跑步 {{item.kil}} 公里</div>
        <div class="Runrecord-info">
          <span>时速: {{item.speed}}</span>
          <span>用时:00:23:43</span>
          <span>消耗: {{item.daka}} 千卡</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import RunningTop from "./RunningTop";
export default {
  name: "Record",
  data() {
    return {
      RecordData: {},
      runDate: ""
    };
  },
  components: {
    RunningTop
  },
  mounted() {
    const currentTime = new Date().toLocaleTimeString();
    this.runDate = currentTime.substring(2, currentTime.length - 3);
    this.$axios({
      url: this.HOST + "/api/homedata",
      method: "get"
    }).then(res => {
      this.RecordData = res.data.running.runningrecord;
    });
  }
};
</script>
<style scoped lang="less">
.Runrecord {
  .set-title {
    // width: 1.44rem;
    height: 0.32rem;
    font-size: 0.34rem;
    color: #fff;
    position: fixed;
    top: 0.28rem;
    left: 2.73rem;
    z-index: 888;
  }
  li {
    width: 7.1rem;
    height: 1.8rem;
    background-color: #fff;
    margin: 0.14rem 0.2rem;
    box-sizing: border-box;
    overflow: hidden;
    .record-time {
      width: 1.82rem;
      height: 0.22rem;
      font-size: 0.24rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(23, 24, 24, 1);
      line-height: 0.22rem;
      margin-left: 0.35rem;
      margin-top: 0.25rem;
    }
    .Runrecord-kil {
      width: 4.8rem;
      height: 0.29rem;
      font-size: 0.3rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(23, 24, 24, 1);
      line-height: 0.29rem;
      margin-left: 0.35rem;
      margin-top: 0.42rem;
    }
    .Runrecord-info {
      width: 100%;
      height: 2.3rem;
      font-size: 0.24rem;
      margin-left: 0.35rem;
      margin-top: 0.15rem;
      span{
        margin-right: 0.1rem;
      }
    }
  }
}
</style>
