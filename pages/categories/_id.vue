<template>
  <div id="category">
    <search-result />
    <post-list />
  </div>
</template>

<script>
  import Vue from 'vue';
  import PostList from '@/components/default/organisms/PostList.vue';
  import SearchResult from '@/components/default/organisms/SearchResult.vue';
  
  export default Vue.extend({
    components: {
      SearchResult,
      PostList
    }
  });
</script>

<style lang="scss">
</style>

