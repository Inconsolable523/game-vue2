<template>
  <div class="wrap">
    <div class="card">
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
    }
  }
</script>

<style lang="scss" scoped>

</style>

