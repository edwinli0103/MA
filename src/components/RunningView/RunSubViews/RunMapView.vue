<template>
  <div class="runMap">
    <RunningTop/>
    <span class="set-title">我的跑步地图</span>
    <div id="runBmap" class="runBmap"></div>
    <div class="runMap-info">
      <div class="runMap-info-kil">
        <div class="runMap-info-kilnum">
          <span class="kilnum">2.02</span>
          <span class="kil">公里</span>
          <span class="kil-time">12月12日 18:44</span>
        </div>
      </div>
      <div class="speed-num">05′30′′</div>
      <div class="speed">分钟/公里</div>
      <div class="when-num">00:11:40</div>
      <div class="when">用时</div>
      <div class="daka-num">144</div>
      <div class="daka">千卡</div>
    </div>
  </div>
</template>
<script>
import RunningTop from "./RunningTop";
export default {
  name: "RunMap",
  components: {
    RunningTop
  },
  mounted() {
    var map = new BMap.Map("runBmap");
    var point = new BMap.Point(116.664849, 39.29073);
    map.centerAndZoom(point, 12);
    map.enableScrollWheelZoom(true);

    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker);

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        
        var myP1 = new BMap.Point(r.point.lng, r.point.lat); //起点
        var myP2 = new BMap.Point(116.449032,39.950539);

        var driving2 = new BMap.DrivingRoute(map, {
          renderOptions: { map: map, autoViewport: true }
        }); //驾车实例
        driving2.search(myP1, myP2); //显示一条公交线路
      } else {
        alert("failed" + this.getStatus());
      }
    });
  }
};
</script>
<style scoped lang="less">
.runMap {
  position: relative;
  .set-title {
    // width: 1.44rem;
    height: 0.32rem;
    font-size: 0.34rem;
    color: #fff;
    position: fixed;
    top: 0.28rem;
    left: 2.73rem;
    z-index: 889;
  }
  .runBmap {
    height: 13.34rem;
    width: 7.5rem;
  }
  .runMap-info {
    width: 7.5rem;
    height: 2.77rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(23, 24, 24, 1);
    .runMap-info-kil {
      width: 5.32rem;
      height: 1.29rem;
      position: absolute;
      bottom: 2.09rem;
      left: 0.42rem;
      background: rgba(249, 212, 7, 1);
      .runMap-info-kilnum {
        .kilnum {
          display: block;
          width: 2.88rem;
          height: 0.6rem;
          font-size: 0.8rem;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          color: rgba(23, 24, 24, 1);
          line-height: 0.8rem;
          position: absolute;
          left: 0.29rem;
          bottom: 0.45rem;
        }
        .kil,
        .kil-time {
          // width: 0.46rem;
          height: 0.23rem;
          font-size: 0.24rem;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(23, 24, 24, 1);
          line-height: 0.24rem;
          position: absolute;
          left: 2.1rem;
          bottom: 0.34rem;
        }
        .kil-time {
          position: absolute;
          left: 3.37rem;
          bottom: 0.34rem;
        }
      }
    }
    .speed-num,
    .when-num,
    .daka-num {
      width: 1.7rem;
      height: 0.41rem;
      font-size: 0.48rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(249, 212, 7, 1);
      line-height: 0.48rem;
    }
    .speed-num {
      position: absolute;
      left: 0.68rem;
      bottom: 1.05rem;
    }
    .when-num {
      position: absolute;
      left: 2.8rem;
      bottom: 1.05rem;
    }
    .daka-num {
      position: absolute;
      right: 0.5rem;
      bottom: 1.05rem;
    }
    .speed,
    .when,
    .daka {
      width: 1.1rem;
      height: 0.23rem;
      font-size: 0.24rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(249, 212, 7, 1);
      line-height: 0.24rem;
    }
    .speed {
      position: absolute;
      left: 0.91rem;
      bottom: 0.65rem;
    }
    .when {
      position: absolute;
      left: 3.52rem;
      bottom: 0.65rem;
    }
    .daka {
      position: absolute;
      right: 0.89rem;
      bottom: 0.65rem;
    }
  }
}
</style>
