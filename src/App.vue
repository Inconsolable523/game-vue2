<template>
  <div class="game-panel">
    <!--组装组件-->
    <dash-board></dash-board>
    <chess-board></chess-board>
    <play-status></play-status>
  </div>
</template>

<script>
  import dashBoard from './pages/header/dashBoard.vue';
  import chessBoard from './pages/body/chessBoard.vue';
  import playStatus from './pages/footer/status.vue';

  import { mapActions } from 'vuex';

  export default {
    name: 'game-panel',
    components: {
      dashBoard,
      chessBoard,
      playStatus
    },
    data() {
      return {}
    },
    methods: {
      ...mapActions([
        'reset'//映射this.reset()为this.$store.dispatch('reset')
      ])
    },
    created(){
//          触发游戏重置
      this.reset();
    }
  }
</script>

<style scoped>
  .game-panel {
    width: 450px;
    height: 670px;
    border: 4px solid #bdbdbd;
    border-radius: 2px;
    background-color: #fafaef;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 450px) {
    .game-panel {
      width: 100%;
      height: 100%;
      justify-content: space-around;
    }

  }

</style>

