<template>
  <div id="top">
    <post-list :posts="posts" />
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import PostList from '@/components/default/organisms/PostList.vue';
  
  export default Vue.extend({
    components: {
      PostList
    },
    computed: {
      ...mapState({
        posts: state => state.posts.dataList
      }),
    },
    async asyncData({ store, route }) {
      const page = route.query['page'] || 1;
      await store.dispatch('posts/initializePostList', { page: page });
      await store.dispatch('categories/initializeCategoryList');
      await store.dispatch('tags/initializeTagList');
    }
  });
</script>

<style lang="scss">
</style>

