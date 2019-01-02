<template>
  <main>
    <slot />
  </main>
</template>

<script>
  import Vue from 'vue';
  
  export default Vue.extend({

  });
</script>

<style lang="scss" scoped>
  main {
    margin: 18px 0;
    
  }
   @media all and (max-width: 720px) {
    main {
      width: 100%;
    }
  }
  @media all and (min-width: 720px) {
    main {
      float: left;
      width: 70%;
    }
  }
</style>

