<template>
  <div class="bestScore">
    <span>Highest Speed</span>
    <h2>{{bestScore}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'bestScore',
    data() {
      return {}
    },
    computed: {
      bestScore(){
        return this.$store.state.bestScore;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bestScore {
    width: 120px;
    height: 100px;
    background-color: #bbada0;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #eae0d1;
    span {
      font-size: 19px;
      font-weight: bold;
      width: 100%;
      text-align: center;
    }
    h2 {
      color: #fff;
    }
  }

  @media screen and (max-width: 436px) {
    .bestScore {
      width: 110px;
      height: 90px;
      span {
        font-size: 16px;
      }
      h2 {
        font-size: 20px;
      }
    }

  }

  @media screen and (max-width: 380px) {
    .bestScore {
      width: 100px;
      height: 80px;
      span {
        font-size: 16px;
      }
      h2 {
        font-size: 20px;
      }
    }

  }

</style>

