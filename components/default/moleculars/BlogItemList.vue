<template>
  <ul class="blog-item-list">
    <li class="category">
      <nuxt-link :to="`/categories/${category.id}`">{{ category.name }}</nuxt-link>
    </li>
    <li class="published-at">{{ publishedAt }}</li>
  </ul>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import moment from 'moment';

  export default Vue.extend({
    props: {
      post: {
        type: Object,
        required: true
      },
    },
    computed: {
      ...mapGetters({
        findCategory: 'categories/findCategory'
      }),
      publishedAt(){
        return moment(this.post.date).format("YYYY-MM-DD")
      },
      category(){
        return this.findCategory(this.post.categories[0]); 
      }
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

