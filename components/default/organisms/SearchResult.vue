<template>
  <div class="search-result">
    <p>'{{ topicWord }}' に関する記事： {{ total }}件</p>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  
  export default Vue.extend({
    props: {
      topicWord: {
        type: String,
        required: true
      }
    },
    computed: {
      ...mapState({
        total: state => state.posts.total
      })
    }
  });
</script>

<style lang="scss">
  .search-result {
    padding: 20px 0;
    border-bottom: 1px solid $border;
    text-align: center;
    margin: 0 13px 22px 13px;
  }
</style>

