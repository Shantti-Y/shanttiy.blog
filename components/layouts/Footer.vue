<template>
  <footer>
    <span id="copyright">© 2019 shanttiy blog</span>
  </footer>
</template>

<script>
  import Vue from 'vue';
  
  export default Vue.extend({

  });
</script>

<style lang="scss" scoped>
  footer {
    background-color: $footer-background;
    height: 40px;
    width: 100%;
    padding: 12px 0;

    #copyright {
      padding-top: 10px;
      color: white;
      font-size: 14px;
    }
  }
  @media all and (max-width: 720px) {
    footer {
      text-align: center;
    }
  }
  @media all and (min-width: 720px) {
    footer {
      text-align: right;
      #copyright {
        margin: 18px;
      }
    }
  }
</style>

