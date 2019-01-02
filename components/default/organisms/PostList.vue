<template>
  <div class="post-list">
    <div class="posts">
      <post />
    </div>
    
    <pagination />
  </div>
</template>

<script>
  import Vue from 'vue';
  import Post from '@/components/default/organisms/Post.vue';
  import Pagination from '@/components/default/moleculars/Pagination.vue';
  
  export default Vue.extend({
    components: {
      Post,
      Pagination
    }
  });
</script>

<style lang="scss">
  .posts {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>

