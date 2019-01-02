<template>
  <div id="post">
    <post-detail />
    <neighbor-post-links />
  </div>
</template>

<script>
  import Vue from 'vue';
  import PostDetail from '@/components/default/organisms/PostDetail.vue';
  import NeighborPostLinks from '@/components/default/moleculars/NeighborPostLinks.vue';

  export default Vue.extend({
    components: {
      PostDetail,
      NeighborPostLinks
    }
  });
</script>

<style lang="scss" scoped>
</style>

