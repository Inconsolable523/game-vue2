<template>
  <h1 class="logo" @click="menu">Menu</h1>
</template>

<script>
  export default {
    name: 'logo',
    data() {
      return {}
    },
    methods:{
      menu(){
        this.$router.push('/menu');
      }
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
    cursor: pointer;
  }

</style>

