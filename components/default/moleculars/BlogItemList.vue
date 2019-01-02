<template>
  <ul class="blog-item-list">
    <li class="category"><a>プログラミング</a></li>
    <li class="published-at">2018-01-12</li>
  </ul>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    components: {
    }
  });
</script>

<style lang="scss" scoped>
  .blog-item-list {
    li {
      display: inline-block;
    }
    .category {
      a {
        font-size: 14px;
        color: $main-text;
        &:hover {
          cursor: pointer;
          color: $main-hover;
          text-decoration: underline;
        }
      }
    }
    .published-at {
      font-size: 12px;
      float: right;
      color: $quoteblock;
    }
  }
</style>

