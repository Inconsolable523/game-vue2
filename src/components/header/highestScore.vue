<template>
  <div class="bestScore">
    <span>Shortest Times</span>
    <h2>{{bestScore}}s</h2>
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
      margin-top: 14px;
      font-size: 19px;
      font-weight: bold;
      width: 100%;
      text-align: center;
    }
    h2 {
      color: #fff;
    }
  }

</style>

