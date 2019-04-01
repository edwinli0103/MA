<template>
  <div>
    <RuningStart />
    <Ranking />
  </div>
</template>
<script>
import RuningStart from "../../components/RunningView/RunningStart"
import Ranking from "../../components/RunningView/Ranking"
export default {
  name: "Running",
  components: {
      RuningStart,
      Ranking
  },
};
</script>
<style scoped>

</style>


