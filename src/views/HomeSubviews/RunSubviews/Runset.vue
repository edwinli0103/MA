<template>
  <div>
    <RunningTop/>
    <RunSetList/>
  </div>
</template>
<script>
import RunningTop from "@/components/RunningView/RunSubViews/RunningTop.vue";
import RunSetList from "@/components/RunningView/RunSubViews/RunSetList.vue"
export default {
  name: "Runset",
  components: {
    RunningTop,
    RunSetList
  }
};
</script>
<style scoped>
</style>
