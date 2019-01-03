<template>
  <div class="post-list">
    <div class="posts">
      <post
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
    <pagination />
  </div>
</template>

<script>
  import Vue from 'vue';
  import Post from '@/components/default/organisms/Post.vue';
  import Pagination from '@/components/default/moleculars/Pagination.vue';
  
  export default Vue.extend({
    props: {
      posts: {
        type: Array,
        required: true
      }
    },
    components: {
      Post,
      Pagination
    },
    watch: {
      posts() {
        const el = document.querySelector('body')
        if(el != null){
          el.scrollIntoView()
        }
        
      }
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

