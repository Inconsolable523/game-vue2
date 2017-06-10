<template>
  <div class="wrap">
    <!--菜单-->
    <h1>Memory</h1>
    <h2 @click="easy">简单</h2>
    <h2 @click="general">一般</h2>
    <h2 @click="hard">困难</h2>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    data() {
      return {}
    },
    methods: {
      easy(){
        this.$router.push('/easy');
      },
      general(){
        this.$router.push('/normal');
      },
      hard(){
        this.$router.push('/hard');
      }
    }
  }
</script>

<style lang="scss" scoped>

  .wrap {
    width: 100%;
    height: 100%;
    background: url("../../assets/img/background.png") no-repeat;
    h1 {
      width: 50%;
      height: 100px;
      margin: 0 auto;
      border-radius: 5px;
      background-color: #5979ac;
      line-height: 100px;
      font-size: 32px;
      text-align: center;
      color: #fff;
      opacity: 0.7;
      margin-top: 80px;
      margin-bottom: 70px;
    }
    h2 {
      width: 40%;
      height: 80px;
      margin: 0 auto;
      border-radius: 4px;
      line-height: 80px;
      opacity: 0.7;
      font-size: 22px;
      cursor: pointer;
      background-color: #bbada0;
      color: #fff;
      text-align: center;
      margin-bottom: 40px;
    }
  }

</style>

