<template>
  <div class="Train">
    <div class="myPlan">
      <h4>我的计划</h4>
      <router-link to="/fitdetails" tag="div" class="backgroundImge">
        <img src="../../assets/img-lh/jianshen2.png" alt>
        <h3>马甲线养成</h3>
        <p class="p1">
          <span class="days">{{ this.trainData.day }} 天</span>
          <span>
            燃脂
            <i>{{ this.trainData.daka }}</i>
          </span>
        </p>
        <p class="p2">
          <span>
            L2
            <i>腹部</i>
          </span>
        </p>
        <span class="join">已有<i>{{ this.trainData.person }}</i>人参与</span>
      </router-link>
    </div>
    <div class="TrainingRecords">
      <h4>训练记录</h4>
      <ul>
        <li>
          <span class="merman">人鱼线雕刻</span>
          <div>
            <span class="difficulty">
              难度
              <img src="../../assets/yx_imges/star.png" alt>
              <img src="../../assets/yx_imges/star.png" alt>
            </span>
            <span class="qianka">{{ this.trainData.qianka }}</span>
          </div>
          <span class="time">{{ this.trainData.minute }}分钟</span>
        </li>
      </ul>
    </div>
    <div class="addTraining">
      <h4>
        添加训练
        <i>></i>
      </h4>
      <router-link to="/fitdetails" tag="div" class="backgroundImge" v-for="(item,index) in trainData.trainlist" :key="index">        
        <img :src="item" alt>
      </router-link>
    </div>
    <Loadmore @onCostomEvent="loadHandler"/>
  </div>
</template>
<script>
import Loadmore from "../../components/Loadmore"
export default {
  name: "Train",
  data(){
    return {
      trainData:{},
    }
  },
  methods: {
    loadHandler () {
      fetch(this.HOST+'api/fitnessdata')
      .then(res => res.json())
      .then(data => {
        this.trainData.trainlist = this.trainData.trainlist.concat(data.train.trainlist)   
    })
    }
  },
  mounted() {
    fetch(this.HOST+'api/fitnessdata')
    .then(res => res.json())
    .then(data => {
      this.trainData = data.train
    })
  },
  components: {
    Loadmore
  }
};
</script>
<style scoped lang="less">
.Train {
  width: 100%;
  .myPlan {
    margin-top: 1rem;
    width: 100%;
    height: 4.37rem;
    background-color: #ffffff;

    h4 {
      width: 100%;
      font-size: 0.34rem;
      text-align: center;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(23, 24, 24, 1);
      padding: 0.22rem 0 0 0;
    }
    .backgroundImge {
      // width: 7.26rem;
      height: 3.46rem;
      margin: 0.12rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      h3 {
        font-size: 20px;
        position: absolute;
        top: 0.52rem;
        left: 0.5rem;
        color: rgba(255, 255, 255, 0.8);
      }
      .p1 {
        font-size: 12px;
        position: absolute;
        top: 1.26rem;
        left: 0.5rem;
        color: rgba(255, 255, 255, 0.6);
        .days {
          font-size: 12px;
        }
      }
      .p2 {
        font-size: 12px;
        position: absolute;
        top: 2rem;
        left: 0.5rem;
        color: rgba(255, 255, 255, 0.6);
        i {
          font-size: 12px;
        }
      }
      .join {
        font-size: 12px;
         color: rgba(255, 255, 255, 0.6);
        position: absolute;
        bottom: 0.4rem;
        right: 0.5rem;
      }
    }
  }
  .TrainingRecords {
    width: 100%;
    background-color: #ffffff;
    margin: 0.15rem 0;
    h4 {
      width: 100%;
      font-size: 0.34rem;
      text-align: center;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(23, 24, 24, 1);
      padding: 0.22rem 0 0.22rem 0;
    }
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 1.5rem;
        border-top: 1px solid #efefef;
        border-top: 1px solid #efefef;
        position: relative;
        position: relative;
        .merman {
          display: block;
          margin: 0.39rem 0 0 0.21rem;
          font-weight: 500;
          color: rgba(23, 24, 24, 1);
          font-size: 0.3rem;
        }
        div {
          width: 2.95rem;
          height: 0.23rem;
          margin: 12.5px 0.25rem;
          .difficulty {
            margin-bottom: 0.25rem;
            font-size: 0.24rem;
            img {
              width: 0.24rem;
              height: 0.24rem;
            }
          }
          .qianka {
            float: right;
            font-size: 0.24rem;
          }
        }
        .time {
          font-size: 0.3rem;
          font-weight: 500;
          color: rgba(23, 24, 24, 1);
          float: right;
          position: absolute;
          top: 0.61rem;
          right: 0.2rem;
        }
      }
    }
  }
  .addTraining {
    background-color: #ffffff;
    h4 {
      width: 100%;
      font-size: 0.34rem;
      text-align: center;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(23, 24, 24, 1);
      padding: 0.22rem 0 0.22rem 0;
      position: relative;
      i {
        position: absolute;
        right: 0.2rem;
        color: #cccccc;
      }
    }
    .backgroundImge {
      height: 3.46rem;
      margin: 0.12rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
