<template>
  <div class="wrap" @click="flip">
    <div class="card" :class="{flipped:option.flipped}">
      <img class="front" v-if="option.cardName === 'beauty1'" src="../../assets/img/beauty1.png"/>
      <img class="front" v-if="option.cardName === 'beauty2'" src="../../assets/img/beauty2.png"/>
      <img class="front" v-if="option.cardName === 'beauty3'" src="../../assets/img/beauty3.png"/>
      <img class="front" v-if="option.cardName === 'beauty4'" src="../../assets/img/beauty4.png"/>
      <img class="front" v-if="option.cardName === 'boy1'" src="../../assets/img/boy1.jpg"/>
      <img class="front" v-if="option.cardName === 'boy2'" src="../../assets/img/boy2.jpg"/>
      <img class="front" v-if="option.cardName === 'boy3'" src="../../assets/img/boy3.jpg"/>
      <img class="front" v-if="option.cardName === 'boy4'" src="../../assets/img/boy4.jpg"/>
      <img class="back" src="../../assets/img/back.png"/>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

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
    methods: {
      ...mapActions([
        'flipCard'
      ]),
      flip(){
        if (this.option.flipped) {
          return;
        }
        this.flipCard(this.option);
        this.$emit('flipped', this.option);
      }

    }
  }
</script>

<style lang="scss" scoped>

  .wrap {
    width: 100px;
    height: 121px;
    margin-right: 3px;
    cursor: pointer;
    position: relative;
    perspective: 800px;
    -webkit-perspective: 800px;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d; /* Safari 和 Chrome */
  }

  .card.flipped {
    transform: rotateY(-180deg);
  }

  .card img {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: blue;/*？？？*/
    backface-visibility: hidden;
  }

  .card .front {
    transform: rotateY(180deg);
    border: 2px solid #777;
    border-radius: 6px;
  }


  @media screen and (max-width: 450px) {
    .wrap {
      width: 92px;
      height: 111px;
      margin-right: 1px;
    }
  }

  @media screen and (max-width: 414px) {
    .wrap {
      width: 80px;
      height: 102px;
      margin-right: 1px;
    }
  }


</style>

