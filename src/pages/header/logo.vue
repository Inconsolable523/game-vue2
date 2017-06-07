<template>
  <h1 class="logo">Memory</h1>
</template>

<script>
  export default {
    name: 'logo',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    width: 160px;
    height: 100px;
    line-height: 100px;
    border-radius: 5px;
    background-color: #5979ac;
    color: #fff;
    text-align: center;
  }

  @media screen and (max-width: 436px) {
    .logo {
      width: 140px;
      height: 90px;
      line-height: 90px;
      font-size: 22px;
    }
  }

  @media screen and (max-width: 380px) {
    .logo {
      width: 130px;
      height: 80px;
      line-height: 80px;
      font-size: 20px;
    }
  }
</style>

