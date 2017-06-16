<template>
  <div class="matchProgress">
    <span>Pairs Left To Match</span>
    <h2>{{leftMatched}}</h2>

  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {}
    },
    computed: {
      leftMatched(){
        return this.$store.state.leftmathed;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .matchProgress {
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

