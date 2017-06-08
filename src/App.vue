<template>
  <div class="game-panel">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'menu',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .game-panel {
    min-width: 375px;
    width: 450px;
    /*height: 670px;*/
    border: 4px solid #bdbdbd;
    border-radius: 2px;
    background-color: #fafaef;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

</style>

