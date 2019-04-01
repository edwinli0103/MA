<template>
  <div class="material">
    <div class="material_music">
      <h3>音乐库</h3>
      <div class="material_timetable">
        <div v-for="(item,index) in materialData" :key="index" class="material_curriculum">
          <img :src="item.pic" alt>
          <p>{{ item.iname }}</p>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Material",
  data(){
    return{
      materialData:{}
    }
  },
  mounted(){
    this.$axios({
      url:this.HOST+"/api/fitnessdata",
      method:"get"
    })
    .then(res => {
      this.materialData = res.data.material.materiallist;
    })
  }
};
</script>
<style scoped lang="less">
.material {
  margin-top: 1rem;
  .material_music {
    width: 100%;
    h3 {
      width: 0.99rem;
      height: 0.28rem;
      color: #171818;
      font-size: 0.3rem;
      margin-left: 0.2rem;
      margin-top: 1.3rem;
    }
    .material_timetable {
        width: 5.03rem;
        margin-top: 0.27rem;
        margin-left: 1.16rem;
      .material_curriculum{
        width: 1.88rem;
        height: 1.88rem;
        float: left;
        margin-right: 1.27rem;
        margin-bottom: 1.24rem;
        img {
          width: 100%;
          height: 100%;
        }
        p{
          margin-top: 0.24rem;
          color: #171818;
          font-size: 0.3rem;
        }
      }
      :nth-child(2n){
        margin-right:0;
      }
    }
  }
}
</style>
