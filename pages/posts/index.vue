<template>
  <div id="top">
    <search-result :topicWord="topicQuery" />
    <post-list :posts="posts" />
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState, mapGetters, mapActions } from 'vuex';
  import SearchResult from '@/components/default/organisms/SearchResult.vue';
  import PostList from '@/components/default/organisms/PostList.vue';
  
  export default Vue.extend({
    components: {
      SearchResult,
      PostList
    },
    watch: {
      '$route'(to, from) {
        if(to.query['q'] != from.query['q']){
          this.initializePostList({ search: to.query['q'] });
        }
      },
      currentMenu() {
        window.scrollBy(0, 1);
        window.scrollBy(0, -1);
      }
    },
    computed: {
      ...mapState({
        posts: state => state.posts.dataList
      }),
      topicQuery() {
        return this.$route.query['q'];
      }
    },
    methods: {
      ...mapActions({
        initializePostList: 'posts/initializePostList'
      })
    },
    async asyncData({ store, route }) {
      const query = route.query['q'];
      const page = route.query['page'] || 1;
      await store.dispatch('posts/initializePostList', { search: query, page: page });
    }
  });
</script>

<style lang="scss">
</style>

