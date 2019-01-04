<template>
  <div id="post">
    <post-detail :post="post" />
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import PostDetail from '@/components/default/organisms/PostDetail.vue';
  import NeighborPostLinks from '@/components/default/moleculars/NeighborPostLinks.vue';

  export default Vue.extend({
    components: {
      PostDetail,
      NeighborPostLinks
    },
    computed: {
      ...mapState({
        post: state => state.posts.data
      })
    },
    async asyncData({ store, route }) {
      const post = route.params['id'];
      await store.dispatch('posts/initializePost', post);
      await store.dispatch('categories/initializeCategoryList');
      await store.dispatch('tags/initializeTagList');
    }
  });
</script>

<style lang="scss" scoped>
</style>

