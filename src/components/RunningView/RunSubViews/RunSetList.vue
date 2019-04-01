<template>
  <div class="setList">
    <span class="set-title">跑步设置</span>
    <div class="set-list">
      <div class="set-list-voice">
        <div @click="clickHandler(1)">
          <p>语音播报</p>
          <div v-if="voice" class="open">
            <div class="close-round round"></div>
          </div>
          <div v-else class="open close">
            <div class="close-round"></div>
          </div>
        </div>
        <div>
          <p>语音包</p>
        </div>
      </div>
      <div class="auto-stop" @click="clickHandler(2)">
        <p>自动暂停</p>
        <div v-if="autostop" class="open">
          <div class="close-round round"></div>
        </div>
        <div v-else class="open close">
          <div class="close-round"></div>
        </div>
      </div>
      <div class="long-bright" @click="clickHandler(3)">
        <p>屏幕长亮</p>
        <div v-if="longbright" class="open">
          <div class="close-round round"></div>
        </div>
        <div v-else class="open close">
          <div class="close-round"></div>
        </div>
      </div>
      <div class="my-Runrecord">
        <div class="Runrecord" @click="clickHandler(6)">
          <p>我的跑步记录</p>
        </div>
        <div class="find-route">
          <p>发现路线</p>
        </div>
        <div class="matching-route" @click="clickHandler(4)">
          <p>自动匹配路线</p>
          <div v-if="matchingroute" class="open">
            <div class="close-round round"></div>
          </div>
          <div v-else class="open close">
            <div class="close-round"></div>
          </div>
        </div>
      </div>
      <div class="show-data" @click="clickHandler(5)">
        <p>锁屏显示运动数据</p>
        <div v-if="showdata" class="open">
          <div class="close-round round"></div>
        </div>
        <div v-else class="open close">
          <div class="close-round"></div>
        </div>
      </div>
      <div class="off-line-map">
        <p>离线地图</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RunSetList",
  data() {
    return {
      voice: false,
      autostop: false,
      longbright: false,
      matchingroute: false,
      showdata: false
    };
  },
  methods: {
    clickHandler(data) {
      if (data == 1) {
        this.voice = !this.voice;
      }
      if (data == 2) {
        this.autostop = !this.autostop;
      }
      if (data == 3) {
        this.longbright = !this.longbright;
      }
      if (data == 4) {
        this.matchingroute = !this.matchingroute;
      }
      if (data == 5) {
        this.showdata = !this.showdata;
      }
      if (data == 6) {
        this.$router.push("/runrecord");
      }
    }
  }
};
</script>
<style scoped>
.setList{
  margin-top: 0.88rem;
}
.set-title {
  width: 1.44rem;
  height: 0.32rem;
  font-size: 0.34rem;
  color: #fff;
  position: fixed;
  top: 0.28rem;
  left: 3.03rem;
  z-index: 888;
}
.set-list-voice > div,
.auto-stop,
.long-bright,
.my-Runrecord > div,
.show-data,
.off-line-map {
  width: 100%;
  height: 1rem;
  background-color: #fff;
}
p {
  font-size: 0.3rem;
  height: 1rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(23, 24, 24, 1);
  line-height: 1rem;
  margin-left: 0.22rem;
}
.set-list-voice > div:first-child,
.Runrecord,
.find-route {
  border-bottom: 2px solid #efefef;
}

.set-list-voice > div:last-child,
.auto-stop,
.long-bright,
.my-Runrecord,
.show-data {
  margin-bottom: 0.3rem;
}
.set-list-voice,
.auto-stop,
.long-bright,
.matching-route,
.show-data {
  position: relative;
}
.open {
  width: 0.8rem;
  height: 0.3rem;
  background-color: #feec82;
  position: absolute;
  right: 0.22rem;
  top: 0.35rem;
  border-radius: 0.4rem;
}
.close {
  background-color: #c5c5c5;
}
.close-round {
  width: 0.4rem;
  height: 0.4rem;
  background-color: #8b8c8c;
  position: absolute;
  right: 20px;
  top: -2.5px;
  border-radius: 50%;
}
.round {
  background-color: #fed906;
  position: absolute;
  right: 0;
}
</style>
