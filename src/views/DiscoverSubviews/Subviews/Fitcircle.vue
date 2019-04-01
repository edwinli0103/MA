<template>
  <div class="fitcircle">
    <div  class="fitcircle_personal" v-for="(item,index) in fitcircleData" :key="index">
      <div class="personal_head">
        <div class="personal_headImg">
          <img :src="item.touxiang" alt>
        </div>
        <div class="personal_head_name">
          <p>{{ item.iname }}</p>
          <p>{{ item.address }}</p>
        </div>
        <div class="personal_head_time">
          <p>{{ item.time }}</p>
        </div>
      </div>
      <router-link tag="div" :to="{ name:'Dynamicdetails',params:{ uname:item.iname,zan:item.star } }" class="personal_run">
        <img :src="item.pic" alt>
        <p>{{ item.msg }}</p>
        <hr>
      </router-link>

      <div class="personal_foot">
        <div class="personal_foot_like">
          <div href="#">
            <img src="../../../assets/img-lh/like.png" alt>
            <span>{{ item.star }}</span>
          </div>
        </div>
        <div class="personal_foot_discuss">
          <div href="#">
            <img src="../../../assets/img-lh/dis.png" alt>
            <span>{{ item.pinglun }}</span>
          </div>
        </div>
      </div>
    </div>
    <Loadmore @onCostomEvent="loadHandler"/>
  </div>
</template>
<script>
import Loadmore from "../../../components/Loadmore"
export default {
  name: "Fitcircle",
  data() {
    return {
      fitcircleData: []
    };
  },
  methods: {
    loadHandler () {
      this.$axios({
        url: this.HOST + "/api/discoverdata",
        method: "get"
      }).then(res => {
        this.fitcircleData = this.fitcircleData.concat(res.data.dynamic.fitcircle) ;
      });
    }
  },
  mounted() {
    this.$axios({
      url: this.HOST + "/api/discoverdata",
      method: "get"
    }).then(res => {
      this.fitcircleData = res.data.dynamic.fitcircle;
      // console.log(res.data.dynamic.fitcircle);
    });
  },
  components: {
    Loadmore
  }
};
</script>
<style scoped lang="less">
.fitcircle {
  margin-top: 2.05rem;
  .fitcircle_personal {
    margin-top: 0.25rem;
    height: 7.5rem;
    background-color: #fff;
    overflow: hidden;
    .personal_head {
      width: 98%;
      margin-top: 0.2rem;
      overflow: hidden;
      .personal_headImg {
        float: left;
        margin-left: 0.2rem;
        width: 1rem;
        height: 1rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .personal_head_name {
        float: left;
        margin-left: 0.4rem;
        :first-child {
          margin-top: 0.1rem;
        }
        :last-child {
          margin-top: 0.2rem;
        }
      }
      .personal_head_time {
        float: right;
        margin-top: 0.2rem;
      }
    }
    .personal_run {
      margin: 0.15rem 3%;
      img {
        width: 100%;
        height: 100%;
      }
      p {
        margin: 0.15rem 0;
        line-height: 0.35rem;
      }
    }
    .personal_foot {
      height: 0.8rem;
      margin: 0 4%;
      .personal_foot_like {
        width: 48%;
        height: 100%;
        text-align: center;
        border-right: 0.05rem solid #cccc;
        float: left;
        margin-top: 0.15rem;
        img {
          width: 10%;
        }
        span {
          margin-top: 0.2rem;
        }
      }
      .personal_foot_discuss {
        width: 48%;
        height: 100%;
        text-align: center;
        float: right;
        margin-top: 0.15rem;
        img {
          width: 10%;
        }
        span {
          margin-top: 0.2rem;
        }
      }
    }
  }
}
</style>
