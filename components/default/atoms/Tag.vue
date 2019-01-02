<template>
  <a class="tag">海外移住</a>
</template>

<script>
  import Vue from 'vue';
  
  export default Vue.extend({
    components: {
    }
  });
</script>

<style lang="scss" scoped>
  .tag {
    color: $link-text;
    text-decoration: underline;
    text-decoration-style: dotted;

    &:hover {
      color: $link-hover;
      cursor: pointer;
    }
  }
</style>

