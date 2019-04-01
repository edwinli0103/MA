<template>
  <div class="running">
    <div class="running-start">
      <span class="running-title">骑行</span>
      <router-link to="/runmap" class="iconfont location-icon">&#xe64f;</router-link>
      <router-link to="/runset" class="iconfont seting-icon">&#xe530;</router-link>
    </div>
    <div class="progress">
      <img src="../../../assets/RunningImg/progress.png" alt>
      <span class="progress-num">2</span>
      <span class="progress-mileage">公里</span>
      <span class="progress-target">
        目标:
        <i>5</i> 公里
      </span>
    </div>
    <div class="consume">
      <span>大卡</span>
      <span>{{daka}}</span>
    </div>
    <div class="when">
      <span>用时</span>
      <span>{{ h }}:{{ m }}:{{ s }}</span>
    </div>
    <div class="start-pause" v-if="flag" @click="startHandler">骑行开始</div>
    <div class="start-pause" @click="startHandler" v-else>骑行暂停</div>
  </div>
</template>
<script>
import "../../../assets/RunningIcon/iconfont.css";
export default {
  name: "RidingStart",
  data() {
    return {
      flag: true,
      h: 0,
      m: 25,
      s: 30,
      daka: 144
    };
  },
  methods: {
    startHandler() {
      this.flag = !this.flag;
      if (!this.flag) {
        this.timer = setInterval(() => {
          this.s += 1;
          if (this.s >= 60) {
            this.m += 1;
            this.s = 0;
            if (this.m >= 60) {
              this.h += 1;
              this.m = 0;
            }
          }
        }, 1000);
      }
      if (this.flag) {
        clearInterval(this.timer);
      }
    }
  }
};
</script>
<style scoped>
/* 标题 定位设置图标 */
.running {
  position: relative;
  margin-top: 53px;
  width: 375px;
  height: 308.5px;
  background-color: #fff;
}
.running-title {
  width: 9.5%;
  height: 16px;
  font-size: 17px;
  position: absolute;
  top: 13px;
  left: 11px;
  font-family: PingFang-SC-Medium;
  color: rgba(23, 24, 24, 1);
}
.location-icon,
.seting-icon {
  position: absolute;
  right: 55.5px;
  font-size: 17px;
  top: 13px;
}
.location-icon {
  font-size: 25px;
}
.seting-icon {
  position: absolute;
  right: 20px;
}

/* 进度条 */
.progress {
  width: 135px;
  height: 116px;
  position: absolute;
  right: 119.5px;
  top: 56.5px;
}
.progress img {
  width: 100%;
}
/* 里程数 */
.progress-num {
  width: 15px;
  height: 22px;
  font-size: 30px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(23, 24, 24, 1);
  line-height: 22px;
  position: absolute;
  top: 39px;
  left: 59.5px;
}
.progress-mileage {
  width: 36px;
  height: 17px;
  font-size: 18px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(23, 24, 24, 1);
  line-height: 17px;
  position: absolute;
  top: 69px;
  left: 48.5px;
}
/* 目标  */
.progress-target {
  width: 67.5px;
  height: 11.5px;
  font-size: 12px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(23, 24, 24, 1);
  line-height: 11.5px;
  position: absolute;
  left: 35px;
  bottom: -6px;
}
/* 消耗 用时 */
.consume {
  width: 25px;
  height: 24px;
  font-size: 12px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(23, 24, 24, 1);
  line-height: 24px;
  position: absolute;
  top: 199.5px;
  left: 138.5px;
}
.when {
  width: 24.5px;
  height: 24.5px;
  font-size: 12px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(23, 24, 24, 1);
  line-height: 24.5px;
  text-align: center;
  position: absolute;
  top: 199.5px;
  right: 127px;
}
.start-pause {
  width: 200px;
  height: 40px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  line-height: 40px;
  color: rgba(23, 24, 24, 1);
  background: rgba(254, 217, 6, 1);
  border-radius: 20px;
  position: absolute;
  top: 249px;
  left: 87px;
}
</style>
