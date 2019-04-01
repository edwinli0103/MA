<template>
  <div class="Release">
    <TopBack/>
    <p class="Release-title">发布</p>
    <div class="Release-content">
      <textarea name="content" id="content" cols="30" rows="10"></textarea>
    </div>
    <div class="Release-img">
      <p>
        上传照片(
        <span>第一张图会作为封面显示</span> )
      </p>
      <div>
        <div class="suer-img">
          <img src="../../assets/zgq_img/daRen.png" alt>
        </div>
        <label for="fileInput">
          <i class="iconfont up-icon" aria-hidden="true">&#xf007d;</i>
          <!-- <i class="fa fa-folder-open-o" aria-hidden="true"></i> -->
        </label>
        <input v-show="false" type="file" id="fileInput">
      </div>
    </div>
    <div class="Release-btn" @click="startHandler">发布</div>
  </div>
</template>
<script>
import TopBack from "../../components/RunningView/RunSubViews/RunningTop";
export default {
  name: "Release",
  components: {
    TopBack
  },
  methods: {
    startHandler() {
      console.log(1112);
    }
  }
};
</script>
<style scoped lang="less">
.Release {
  .Release-title {
    width: 1.44rem;
    height: 0.32rem;
    text-align: center;
    font-size: 0.34rem;
    color: #fff;
    position: fixed;
    top: 0.28rem;
    left: 3.03rem;
    z-index: 888;
  }
  .Release-content {
    width: 100%;
    height: 4.5rem;
    padding-top: 0.88rem;
    background-color: #fff;
    textarea {
      width: 100%;
      height: 100%;
      font-size: 0.36rem;
      border: 0;
    }
  }
  .Release-img {
    width: 100%;
    height: 300px;
    margin-top: 20px;
    overflow: hidden;
    background-color: #fff;
    p {
      font-size: 0.32rem;
      color: #9e9e9e;
      span {
        font-size: 0.28rem;
        color: #ccc;
      }
    }
    div {
      div {
        width: 1.88rem;
        height: 1.88rem;
        float: left;
        margin-left: 10px;
        margin-top: 5px;
        img {
          width: 100%;
        }
      }
      .up-icon {
        font-size: 2rem;
        color: #ccc;
      }
    }
  }
  .Release-btn {
    width: 200px;
    height: 40px;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    line-height: 40px;
    color: rgba(23, 24, 24, 1);
    background: rgba(254, 217, 6, 1);
    border-radius: 20px;
    position: relative;
    left: 87.5px;
    top: 20px;
  }
}
</style>
