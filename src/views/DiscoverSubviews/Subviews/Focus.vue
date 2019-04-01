<template>
  <div class="focus">
    <div class="focusItem" v-for="(item,index) in focusData" :key="index">
      <div class="focusHead">
        <img :src="item.touxiang" alt>
        <p class="time">
          <span>{{ item.iname }}</span>
          <span>{{ item.address }}</span>
        </p>
        <div>{{ item.time }}</div>
      </div>
      <p class="text">{{ item.msg }}</p>
      <div class="focusImg">
        <img :src="item.pic[0]" alt>
        <img :src="item.pic[1]" alt>
        <img :src="item.pic[2]" alt>
        <img :src="item.pic[3]" alt>
        <div class="focusLike">
          <div class="focusLike1">
            <img src="../../../assets/yx_imges/stat1.png" alt>
            <span>{{ item.star }}</span>
          </div>
          <div class="focusLike2">
            <img src="../../../assets/yx_imges/start2.png" alt>
            <span>{{ item.pinglun }}</span>
          </div>
        </div>
      </div>
    </div>

    <Loadmore @onCostomEvent="loadHandler"/>
    <div class="focusFlex">
    <router-link tag="div" to="/release" class="focusFlex">
      <img src="../../../assets/yx_imges/Release the dynamic .png" alt>
    </router-link>
    </div>
  </div>
</template>
<script>
import Loadmore from "../../../components/Loadmore"
export default {
  name: "Focus",
  data() {
    return {
      focusData: []
    };
  },
  methods: {
    loadHandler () {
      this.$axios({
        url: this.HOST + "/api/discoverdata",
        method: "get"
      }).then(res => {
        this.focusData = this.focusData.concat(res.data.dynamic.focus) ;
      });
    }
  },
  mounted() {
    this.$axios({
      url: this.HOST + "/api/discoverdata",
      method: "get"
    }).then(res => {
      this.focusData = res.data.dynamic.focus;
    });
  },
  components: {
    Loadmore
  }
};
</script>
<style scoped lang="less">
.focus {
  .focusItem {
    background-color: #ffffff;
    margin-top: 92px;
    clear: both;
    .focusHead {
      background-color: #ffffff;
      height: 0.8rem;
      padding: 3.15% 3.5%;
      // float: left;
      position: relative;
      img {
        height: 100%;
      }
      .time {
        float: right;
        span:nth-child(2n) {
          font-size: 12px;
          color: #ccc;
        }
        span {
          display: block;
          margin: 8px 0;
        }
      }
      div {
        display: inline;
        position: absolute;
        right: 20px;
        bottom: 19px;
        color: #ccc;
      }
    }
    p {
      width: 83%;
    }
    .text {
      //   width: 3rem;
      height: 0.65rem;
      line-height: 0.35rem;
      font-size: 12px;
      padding: 0 3.5%;
    }
    .focusImg {
      width: 100%;
      float: left;
      padding: 0 3.5%;
      background-color: #ffffff;
      img:nth-child(2n) {
        margin-left: 1%;
      }
      img {
        margin: 1% 0;
        width: 45%;
      }

      .focusLike {
        float: right;
        height: 20px;
        line-height: 20px;
        padding: 0 8.5%;
        background: #ffffff;
        color: #ccc;
        .focusLike1 {
          float: left;
        }
        .focusLike2 {
          float: right;
          margin-left: 33px;
        }
        div {
          img {
            width: 0.4rem;
            float: left;
          }
        }
      }
    }
  }
  .focusFlex {
    width: 0.8rem;
    height: 0.8rem;
    position: fixed;
    bottom: 60px;
    right: 45%;
    img {
      width: 100%;
    }
  }
}
</style>
