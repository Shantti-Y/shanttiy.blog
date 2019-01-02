<template>
  <div id="container">
    <app-header />
    <div id="content">
      <app-main>
        <nuxt />
      </app-main>
      <app-aside />
    </div>
    <app-footer />
  </div>
</template>

<script>
  import Vue from 'vue';
  import AppHeader from '~/components/layouts/Header.vue';
  import AppMain from '~/components/layouts/Main.vue';
  import AppAside from '~/components/layouts/Aside.vue';
  import AppFooter from '~/components/layouts/Footer.vue';
  
  export default Vue.extend({
    components: {
      AppHeader,
      AppMain,
      AppAside,
      AppFooter
    }
  });
</script>

<style lang="scss">
  #container {
    width: 100%;
  }
  #content {
  }
  @media all and (max-width: 720px) {
    #content {
    }
  }
  @media all and (min-width: 720px) {
    #content {
      overflow: hidden;
      margin: 0 3%;
    }
  }
</style>

