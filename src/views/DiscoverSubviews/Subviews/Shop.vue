<template>
  <div class="Shop-content">
      <ShopSwiper />
      <Classify />
      <RecmmentList />
  </div>
</template>
<script>
import ShopSwiper from "../../../components/ShopView/ShopSwiper";
import Classify from "../../../components/ShopView/Classiftview";
import RecmmentList from "../../../components/ShopView/RecmmentList";
export default {
  name: "Shop",
  components: {
    ShopSwiper,
    Classify,
    RecmmentList
  }
};
</script>
<style scoped lang="less">
.Shop-content{
    width: 100%;
    // height: 200px;
    padding-top: 1.8rem;
    overflow: hidden;
}
</style>
