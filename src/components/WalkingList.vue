<template>
  <div class="WalkingList">
    <ul>
      <li v-for="(item,index) in walkrankData" :key="index">
        <span class
        ="WalkingList_rank">{{ index+1 }}</span>
        <img :src="item.touxiang" alt class="WalkingList_photo">
        <span class="WalkingList_name">{{ item.name }}</span>
        <span class="WalkingList_num">
          {{ item.step }}
          <i>步</i>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "WalkingList",
  data() {
    return {};
  },
  props: {
    walkrankData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.WalkingList > ul {
  width: 100%;
  background-color: #ffffff;
}
.WalkingList > ul > li {
  height: 50px;
  line-height: 50px;
}
.WalkingList ul li span {
  display: block;
  height: 50px;
  line-height: 50px;
  float: left;
}
.WalkingList_rank {
  margin-left: 11px;
  font-size: 18px;
  font-weight: bold;
  color: #171818;
}
.WalkingList_photo {
  width: 40px;
  height: 40px;
  float: left;
  margin-left: 13.5px;
  /* display: inline; */
}
.WalkingList_name {
  margin-left: 15.5px;
  font-size: 15px;
  font-weight: 500;
  color: #171818;
}
.WalkingList_num {
  color: #171818;
  float: right !important;
  margin-right: 10.5px;
  font-weight: 500;
}
</style>


