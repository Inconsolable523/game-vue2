<template>
    <div class="highestScore">
        <span>Highest Speed</span>
      <h2>{{highestScore}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'highestScore',
        data() {
            return {}
        },
      computed:{
        highestScore(){
          return this.$store.state.highestScore;
        }
      }
    }
</script>

<style lang="scss" scoped>
  .highestScore{
    width: 120px;
    height: 100px;
    background-color: #bbada0;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #eae0d1;
    span{
      font-size: 19px;
      font-weight: bold;
      width: 100%;
      text-align: center;
    }
    h2{
      color: #fff;
    }
  }

</style>

