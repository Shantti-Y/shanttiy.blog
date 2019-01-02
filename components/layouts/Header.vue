<template>
  <header>
    <a>
      <span id="maintitle">shanttiy blog</span>
      <span id="subtitle">やってることを説明するための練習場</span>
    </a>
  </header>
</template>

<script>
  import Vue from 'vue';
  
  export default Vue.extend({

  });
</script>

<style lang="scss" scoped>
  header {
    border-bottom: 1px solid $border;
    width: 100%;
    font-weight: bold;

    a {
      &:hover {
        span {
          cursor: pointer;
          color: $main-hover;
        }
      }
    }
  }
  @media all and (max-width: 720px) {
    header {
      text-align: center;
      margin: 0 auto;
      height: 65px;
      span {
        display: block;
        width: 100%;
      }
      #maintitle {
        margin: 16px auto 12px auto;
        font-size: 20px;
      }
      
      #subtitle {
        margin: 0 auto;
        font-size: 13px;
      }
    }
  }
  @media all and (min-width: 720px) {
    header {
      height: 45px;
      margin-top: 30px;

      #maintitle {
        margin-left: 7%;
        font-size: 23px;
      }

      #subtitle {
        margin-left: 17px;
        font-size: 12px;
      }
    }
  }
</style>

