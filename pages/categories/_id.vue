<template>
  <div id="top">
    <search-result :topicWord="topicCategory.name" />
    <post-list :posts="posts" />
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState, mapGetters } from 'vuex';
  import SearchResult from '@/components/default/organisms/SearchResult.vue';
  import PostList from '@/components/default/organisms/PostList.vue';
  
  export default Vue.extend({
    components: {
      SearchResult,
      PostList
    },
    computed: {
      ...mapState({
        posts: state => state.posts.dataList
      }),
      ...mapGetters({
        findCategory: 'categories/findCategory'
      }),
      topicCategory() {
        const categoryId = parseInt(this.$route.params['id']);
        return this.findCategory(categoryId);
      }
    },
    async asyncData({ store, route }) {
      const category = route.params['id'];
      const page = route.query['page'] || 1;
      await store.dispatch('posts/initializePostList', { categories: [category], page: page });
      await store.dispatch('categories/initializeCategoryList');
      await store.dispatch('tags/initializeTagList');
    }
  });
</script>

<style lang="scss">
</style>

