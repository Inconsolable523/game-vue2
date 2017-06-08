<template>
  <div >
    <!--组装组件-->
    <dash-board></dash-board>
    <chess-board></chess-board>
    <play-status></play-status>
  </div>
</template>

<script>
  import dashBoard from '../../components/header/dashBoard.vue';
  import chessBoard from '../../components/body/chessBoard.vue';
  import playStatus from '../../components/footer/status.vue';

  import { STATUS } from '../../store/mutation-types';
  import { shuffle } from '../../util/shuffle';

  const cardNames = ['beauty1', 'beauty2', 'beauty3','beauty4','beauty5','beauty6','boy1', 'boy2',
    'boy3','boy4'];

  export default {
    name: 'hard',
    components: {
      dashBoard,
      chessBoard,
      playStatus
    },
    data() {
      return {}
    },
    created(){
      this.$store.commit('reset', {
        leftmathed: 8,
        bestScore: localStorage.getItem('bestScore') || 9999,
        status: STATUS.READY,
        cards: shuffle(cardNames.concat(cardNames)).map(name => ({ flipped: false, cardName: name })),
        takeTime: 0
      })
    }
  }
</script>

<style scoped>

</style>

