<template>
  <div class="Dynamicdetails" v-if="detailsData.master">
    <div class="dynamic_discuss">
      <div class="dynamic_discussHead">
        <router-link to="/discover/dynamic/fitcircle">
          <img src="../../assets/img-lh/fanhui.png" alt>
        </router-link>
        <span>动态详情</span>
      </div>
      <div class="personal_head">
        <div class="personal_headImg">
          <img src="../../assets/img-lh/faxian-header.png" alt>
        </div>
        <div class="personal_head_name">
          <p>{{ DynamicdetailsData }}</p>
          <p>{{ detailsData.master.address }}</p>
        </div>
        <div class="personal_head_time">
          <p>{{ detailsData.master.time }}</p>
        </div>
      </div>
      <div class="personal_run">
        <img :src="detailsData.master.pic" alt>
        <p>{{ detailsData.master.msg }}</p>
      </div>
    </div>
    <div class="discuss_header">
      <div class="red_round">
        <img src="../../assets/img-lh/red_like.png" alt>
      </div>
      <div v-for="(item,index) in detailsData.zanlist" :key="index">
        <img :src="item">
      </div>
      <div class="gray_header">...</div>
      <span>{{ zanNumber }}个赞</span>
    </div>
    <div class="commentary">
      <div class="commentary_head">
        <div>全部评论({{ detailsData.pinglunlist.length }})</div>
      </div>
      <div class="commentary_body" v-for="(item,index) in detailsData.pinglunlist" :key="index">
        <div class="commentary_header">
          <img :src="item.touxiang" alt>
        </div>
        <div class="commentary_time">
          <p>{{ item.iname }}</p>
          <p>{{ item.time }}</p>
        </div>
        <div class="commentary_like">
          <img src="../../assets/img-lh/like.png">
          <span>13</span>
        </div>
      </div>
      <div class="commentary_area">
        <p>{{ detailsData.pinglunlist[0].msg }}</p>
      </div>
      <div class="commentary_foot">
        <div>
          <img src="../../assets/img-lh/faxian-pinglun_2.png">
        </div>
        <div>
          <input type="text">
        </div>
        <div>发送</div>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "querystring";

export default {
  name: "Dynamicdetails",
  data() {
    return {
      DynamicdetailsData: "",
      detailsData: {},
      zanNumber: 0
    };
  },
  mounted() {
    this.$axios
      .post(
        this.HOST + "/api/dynamicdetailsdata",
        qs.stringify({
          iname: this.$route.params.uname
        })
      )
      .then(res => {
        this.DynamicdetailsData = this.$route.params.uname;
        this.zanNumber = this.$route.params.zan;
        this.detailsData = res.data;
        // console.log(res.data.pinglunlist)
        // console.log(this.detailsData.master.address);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped lang="less">
.Dynamicdetails {
  .dynamic_discuss {
    padding: 0.03rem;

    background-color: #fff;
    .dynamic_discussHead {
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      background-color: black;
      color: #ffffff;
      font-size: 0.34rem;
      img {
        width: 0.27rem;
        height: 0.28rem;
        position: absolute;
        top: 0.26rem;
        left: 0.2rem;
      }
    }
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
  }
  .discuss_header {
    width: 100%;
    margin: 0.2rem 0;
    height: 0.96rem;
    line-height: 0.96rem;
    text-align: center;
    background-color: #fff;
    font-size: 0.12rem;
    .red_round {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      border: 1px solid #fb4f4f;
      position: relative;
      margin-left: 0.2rem;
      img {
        width: 65%;
        height: 65%;
        position: absolute;
        left: 0.14rem;
        top: 0.17rem;
      }
    }
    div {
      float: left;
      width: 0.8rem;
      height: 0.8rem;
      margin: 0.05rem;
    }
    div > img {
      float: left;
      width: 100%;
      height: 100%;
    }
    .gray_header {
      width: 0.8rem;
      height: 0.8rem;
      line-height: 0.8rem;
      border-radius: 50%;
      background-color: #f1f1f1;
    }
  }
  .commentary {
    height: 4.38rem;
    overflow: hidden;
    background-color: #ffffff;
    position: relative;
    .commentary_head {
      border-bottom: 0.02rem solid #f1f1f1;
      div {
        width: 1.85rem;
        height: 0.82rem;
        line-height: 0.82rem;
        margin-left: 0.3rem;
        border-bottom: 0.02rem solid #999999;
      }
    }
    .commentary_body {
      width: 0.6rem;
      height: 0.6rem;
      margin-left: 0.2rem;
      padding: 0.2rem;
      .commentary_header {
        width: 0.9rem;
        height: 0.9rem;
        margin-top: 0.15rem;
        img {
          width: 90%;
          height: 90%;
        }
      }
    }
    .commentary_time {
      p:first-child {
        position: absolute;
        left: 1.5rem;
        top: 1.2rem;
        font-size: 0.32rem;
        color: black;
      }
      p:last-child {
        position: absolute;
        left: 1.5rem;
        top: 1.7rem;
        font-size: 0.28rem;
        color: #999999;
      }
    }
    .commentary_like {
      width: 0.3rem;
      height: 0.3rem;
      position: absolute;
      right: 1rem;
      top: 1.2rem;
      img {
        width: 100%;
        height: 100%;
      }
      span {
        font-size: 0.1rem;
      }
    }
    .commentary_area {
      height: 0.5rem;
      line-height: 0.5rem;
      margin-left: 1rem;
      margin-right: 0.5rem;
      font-size: 0.24rem;
      padding: 0.5rem;
    }
    .commentary_foot {
      height: 0.8rem;
      border-top: 0.01rem solid #f1f1f1;
      div {
        float: left;
        height: 100%;
        margin-left: 0.3rem;
      }
      img {
        height: 100%;
      }
      div:nth-child(2) {
        padding-top: 0.2rem;
        input {
          margin-left: 0.01rem;
          width: 130%;
          height: 50%;
        }
      }
      div:nth-child(3) {
        padding-top: 0.3rem;
        margin-left: 1.5rem;
      }
    }
  }
}
</style>
