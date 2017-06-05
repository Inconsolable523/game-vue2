<template>
  <div class="dash-panel">
    <logo></logo>
    <match-progress></match-progress>
    <highest-score></highest-score>
  </div>
</template>

<script>
  import logo from './logo.vue';
  import matchProgress from './matchProgress.vue';
  import highestScore from './highestScore.vue';

  export default {
    name: 'dashPanel',
    components: {
      logo,
      matchProgress,
      highestScore
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
.dash-panel{
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

