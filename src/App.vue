<template>
  <!--//TODO:taketime和highestScore状态不应该共享
          成功字样位置问题-->

  <div class="game-panel">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'menu'
  }
</script>

<style lang="scss" scoped>
  .game-panel {
    position: relative;
    width: 450px;
    margin: 0 auto;
    @media screen and (min-height: 780px) {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    border: 4px solid #bdbdbd;
    border-radius: 2px;
    background-color: #fafaef;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

</style>

