<template>
  <div class="classify-info">
    <div class="classify-icon">
      <div>
        <img src="../../assets/zgq_img/qiCai.png" alt>
        <p>器材</p>
      </div>
      <div>
        <img src="../../assets/zgq_img/xieFu.png" alt>
        <p>鞋服</p>
      </div>
      <div>
        <img src="../../assets/zgq_img/daRen.png" alt>
        <p>达人推荐</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Classify"
};
</script>
<style scoped lang="less">
.classify-info {
  width: 100%;
  background-color: #fff;
  .classify-icon {
    width: 100%;
    display: flex;
    padding-top: 0.26rem;
    box-sizing: border-box;
    div {
      flex: 1;
      text-align: center;
    }
    img{
      width: 0.8rem;
    }
    p{
      font-size: 0.24rem;
      margin-top: 0.26rem;
      color:rgba(23,24,24,1);
    }
  }
}
</style>
