<template>
  <div class="chessBoard">
    <!--使用option定制状态-->
    <Card v-for="card in cards" :key="card.id" :option="card" v-on:flipped="onFlipped"></Card>
    <div class="wrapper" v-if="leftMatched === 0">
      <div class="ghost-center">
        <span  class="pass">Success！</span>
      </div>
    </div>
  </div>
</template>

<script>
  //  TODO:bestScore状态共享了

  import Card from './card';
  import { mapActions } from 'vuex';
  import { STATUS } from '../../store/mutation-types';

  export default {
    name: 'chessBoard',
    components: {
      Card
    },
    data() {
      return {
        lastCard: null,
      }
    },
    computed: {
      cards(){
        return this.$store.state.cards;
      },
      status(){
        return this.$store.state.status;
      },
      leftMatched(){
        return this.$store.state.leftmathed;
      }
    },
    methods: {
      ...mapActions([
        'updateStatus',
        'match',
        'flipCards'
      ]),
      onFlipped(o){
//        游戏一开始为游戏计时
        if (this.status === STATUS.READY) {
          this.updateStatus(STATUS.PLAYING);
        }

//        如果之前没有牌被翻开，就把这张牌赋值给secondCard
        if (!this.lastCard) {
          return this.lastCard = o;
        }

//        如果之前有牌被翻了，而且当前翻的这张又正好和之前那张花色相同
        if (this.lastCard !== o && this.lastCard.cardName === o.cardName) {
          this.lastCard = null;
//          配对成功
          this.match();
//          如果所有的牌都配对完毕，变换状态，游戏结束
          return this.leftMatched || this.updateStatus(STATUS.PASS);
        }

//        最后一种情况，有牌被翻了，花色不同
        let lastCard = this.lastCard;
        this.lastCard = null;
//        一秒钟之后，将两张牌都翻回去
        setTimeout(() => {
          this.flipCards([lastCard, o]);
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .chessBoard {
    position: relative;
    margin-top: 20px;
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 10px 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-around;
  }

  .wrapper{
    position: absolute;
    width:100%;
    height:100%;
  }
  .ghost-center {
    position: relative;
    height: 100%;
    text-align: center;
    &:before {
      text-align: left;
      display: inline-block;
      content: ' ';
      height: 100%;
      width: 1%;
      vertical-align: middle;
    }
  }

  .pass {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    color: #646464;
    font-size: 40px;
    font-weight: 800;
    animation: 6s fade forwards;
    transform-origin: 40% 50%;
    @keyframes fade {
      0% { opacity: 0.5 }
      50% {
        opacity: 1;
        transform: scale(2);
      }
      100% {
        transform: scale(3);
        opacity: 0;
      }

    }
  }


</style>

