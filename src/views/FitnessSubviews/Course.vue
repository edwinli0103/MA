<template>
  <div class="course">
    <div class="courseNav">
        <!-- 难易程度 -->
      <el-dropdown class="courseNav">
        <el-button type="text" class="li">
          {{ ease }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" class="pullDown_part">
          <el-dropdown-item @click="easeHandler('简单')">简单</el-dropdown-item>
          <el-dropdown-item @click="easeHandler('容易')">容易</el-dropdown-item>
          <el-dropdown-item @click="easeHandler('偏易')">偏易</el-dropdown-item>
          <el-dropdown-item @click="easeHandler('适中')">适中</el-dropdown-item>
          <el-dropdown-item @click="easeHandler('偏难')">偏难</el-dropdown-item>
          <el-dropdown-item @click="easeHandler('难')">难</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 不限器材 -->
      <el-dropdown class="courseNav">
        <el-button type="text" class="li">
          {{ equipment }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" class="pullDown_part">
            <el-dropdown-item @click="equipmentHandler('跑步机')">跑步机</el-dropdown-item>
            <el-dropdown-item @click="equipmentHandler('椭圆仪')">椭圆仪</el-dropdown-item>
            <el-dropdown-item @click="equipmentHandler('登山机')">登山机</el-dropdown-item>
            <el-dropdown-item @click="equipmentHandler('划船机')">划船机</el-dropdown-item>
            <el-dropdown-item @click="equipmentHandler('腹部训练器')">腹部训练器</el-dropdown-item>
            <el-dropdown-item @click="equipmentHandler('坐姿推胸机')">坐姿推胸机</el-dropdown-item>
            <el-dropdown-item @click="equipmentHandler('坐姿下拉机')">坐姿下拉机</el-dropdown-item>
            <el-dropdown-item @click="equipmentHandler('史密斯机')">史密斯机</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 不限部位 -->
      <el-dropdown class="courseNav">
        <el-button type="text" class="li">
          {{ part }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" class="pullDown_part">
            <el-dropdown-item @click="partHandler('不限部位')">不限部位</el-dropdown-item>
            <el-dropdown-item @click="partHandler('全身')">全身</el-dropdown-item>
            <el-dropdown-item @click="partHandler('腹部')">腹部</el-dropdown-item>
            <el-dropdown-item @click="partHandler('腿部')">腿部</el-dropdown-item>
            <el-dropdown-item @click="partHandler('手臂')">手臂</el-dropdown-item>
            <el-dropdown-item @click="partHandler('臀部')">臀部</el-dropdown-item>
            <el-dropdown-item @click="partHandler('胸部')">胸部</el-dropdown-item>
            <el-dropdown-item @click="partHandler('背部')">背部</el-dropdown-item>
            <el-dropdown-item @click="partHandler('肩部')">肩部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <router-link tag="div" to="/fitdetails" class="course_box" v-for="(item,index) in courseData.courselist" :key="index">
      <img :src="item.pic" alt>
      <span>{{ item.person }}</span>
    </router-link>
    <Loadmore @onCostomEvent="loadHandler"/>
  </div>
</template>
<script>
import Loadmore from "../../components/Loadmore"
export default {
  name: "Course",
  data() {
    return {
      courseData: {},
      ease: "难易程度",
      equipment: "不限器材",
      part: "不限部位"
    };
  },
  methods: {
    easeHandler (data) {
      this.ease = data;
      console.log(111)
    },
    equipmentHandler (data) {
      this.equipment = data;
    },
    partHandler (data) {
      this.part = data;
    },
    loadHandler () {
      this.$axios({
        url: this.HOST + "/api/fitnessdata",
        method: "get"
      }).then(res => {
        this.courseData.courselist = this.courseData.courselist.concat(res.data.course.courselist) ;
      });
    }
  },
  mounted() {
    this.$axios({
      url: this.HOST + "/api/fitnessdata",
      method: "get"
    }).then(res => {
    //   console.log(res.data.course.courselist);
      this.courseData = res.data.course;
    });
  },
  components: {
    Loadmore
  }
};
</script>
<style scoped lang="less">
.course {
  width: 100%;
  margin-top: 1rem;
  background-color: #ffffff;
  .courseNav {
    // width: 100%;
    height: 0.82rem;
    background: rgba(239, 239, 239, 1);
    display: flex;
    .li {
      width: 1.64rem;
      font-size: 0.28rem;
      color: #333333;
      flex-grow: 1;
      margin: 0.25rem 0.4rem;
      font-weight: 400;
    }
    .el-button{
      padding: 0;
    }
  }
}
.course_box {
  height: 3.46rem;
  margin:0 3%;
  margin-top: 10px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  span {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    position: absolute;
    bottom: 0.4rem;
    right: 1rem;
  }
}
</style>
