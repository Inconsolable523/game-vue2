<template>
  <div class="wrap" @click="flip">
    <div class="card" :class="{flipped:option.flipped}">
      <img class="front" v-if="option.cardName === '8-ball'" src="../../assets/img/8-ball.png"/>
      <img class="front" v-if="option.cardName === 'baked-potato'" src="../../assets/img/baked-potato.png"/>
      <img class="front" v-if="option.cardName === 'dinosaur'" src="../../assets/img/dinosaur.png"/>
      <img class="front" v-if="option.cardName === 'kronos'" src="../../assets/img/kronos.png"/>
      <img class="front" v-if="option.cardName === 'rocket'" src="../../assets/img/rocket.png"/>
      <img class="front" v-if="option.cardName === 'skinny-unicorn'" src="../../assets/img/skinny-unicorn.png"/>
      <img class="front" v-if="option.cardName === 'that-guy'" src="../../assets/img/that-guy.png"/>
      <img class="front" v-if="option.cardName === 'zeppelin'" src="../../assets/img/zeppelin.png"/>
      <img class="back" src="../../assets/img/back.png"/>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'card',
    props: {
      option: {
        type: Object,
        default(){
          return {
            flipped: false,
            cardName: ''
          }
        }
      }
    },
    data() {
      return {}
    },
    methods:{
      ...mapActions([
        'flipCard'
      ]),
      flip(){
        if(this.option.flipped){
          return;
        }
        this.flipCard(this.option);
        this.$emit('flipped',this.option);
      }

    }
  }
</script>

<!--todo:两张图片合一-->
<style lang="scss" scoped>
  .wrap {
    width: 100px;
    height: 121px;
    margin-right: 3px;
    cursor: pointer;
    position: relative;
    perspective: 800px;
  }

  .card {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    img {
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      backface-visibility: hidden;
    }
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card img {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    backface-visibility: hidden;
  }

  .card .back {
    background: blue;
    transform: rotateY(0deg);
  }

  .card .front {
    background: blue;
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 450px) {
    .container {
      width: 92px;
      height: 111px;
      margin-right: 1px;
    }
  }

  @media screen and (max-width: 380px) {
    .container {
      width: 85px;
      height: 102px;
      margin-right: 1px;
    }
  }

  @media screen and (max-width: 360px) {
    .container {
      width: 70px;
      height: 84px;
      margin-right: 1px;
    }
  }
</style>

