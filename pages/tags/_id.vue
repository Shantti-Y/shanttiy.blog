<template>
  <div id="top">
    <search-result :topicWord="topicTag.name" />
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
        findTagList: 'tags/findTagList'
      }),
      topicTag() {
        const tagId = parseInt(this.$route.params['id']);
        return this.findTagList([tagId])[0];
      }
    },
    async asyncData({ store, route }) {
      const tag = route.params['id'];
      const page = route.query['page'] || 1;
      await store.dispatch('posts/initializePostList', { tags: [tag], page: page });
    }
  });
</script>

<style lang="scss">
</style>

