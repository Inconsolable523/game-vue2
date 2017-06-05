<template>
  <div class="chessBoard">
    <!--使用option定制状态-->
    <Card v-for="card in cards" :key="card.id" :option="card"></Card>
  </div>
</template>

<script>
  import Card from './card';
  import { mapActions } from 'vuex';
  import { STATUS } from '../../store/mutation-types';

  export default {
    name: 'chessBoard',
    components: {
      Card
    },
    data() {
      return {}
    },
    computed: {
      cards(){
        return this.$store.state.cards;
      }
    },
    mounted(){
      console.log(this.$store.state.cards);
    }
  }
</script>

<style lang="scss" scoped>

</style>

