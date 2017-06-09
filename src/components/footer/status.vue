<template>
  <div class="status-footer">
    <span v-if="status === READY">Ready</span>
    <span v-if="status === PLAYING">Playing</span>
    <a v-if="status === PASS" @click.prevent.stop="reset" >Play again</a>
    <span class="elapsed">{{ takeTime }} s</span>
  </div>
</template>

<script>
import {STATUS} from '../../store/mutation-types';
  export default {
    data() {
      return STATUS;
    },
    computed:{
      status(){
        return this.$store.state.status;
      },
      takeTime(){
        return this.$store.state.takeTime;
      }
    },
    methods: {
      reset(){
        this.$emit('reseted');
      }
    }

  }
</script>

<style scoped>
  .status-footer{
    position: relative;
    margin-top: 10px;
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  .elapsed{
    position: absolute;
    right: 10px;
    font-size: 15px;
    font-weight: normal;
  }
</style>
