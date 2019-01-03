<template>
  <article class="post">
    <div class="post-header">
      <nuxt-link :to="`/posts/${post.id}`">
        <post-thumbnail :thumbnailUrl="post.jetpack_featured_media_url" />
        <p>{{ post.title.rendered }}</p>
      </nuxt-link>
    </div>
    <div class="post-body">
      <blog-item-list :post="post" />
      <tag-list :post="post" />
    </div>
  </article>
</template>

<script>
  import Vue from 'vue';
  import PostThumbnail from '@/components/default/atoms/PostThumbnail.vue';
  import BlogItemList from '@/components/default/moleculars/BlogItemList.vue';
  import TagList from '@/components/default/moleculars/TagList.vue';
  
  export default Vue.extend({
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    components: {
      PostThumbnail,
      BlogItemList,
      TagList
    },
    methods: {
      category(categoryId){
        return this.findCategory(categoryId);
      },
      tags(tags){
        return this.findTagList(tags);
      }
    }
  });
</script>

<style lang="scss">
  .post {
    margin: 0 8px 22px 8px;
    float: left;
    padding: 9px;
    .post-header {
      a {
        text-decoration: none;
        p {
          margin-top: 12px;
          line-height: 130%;
          word-break: break-all;
        }

        &:hover {
          text-decoration: underline;
          img {
            opacity: 0.7;
          }
          p {
            cursor: pointer;
            color: $main-hover;
          }
        }
      }
    }
    .post-body {
      .blog-item-list {
        margin-top: 15px;
      }
      .tag-list {
        margin-top: 15px;
      }
    }
  }

  @media all and (max-width: 720px) {
    .post {
      width: 100%;
      border-bottom: 1px solid $border;
    }
  }
  @media all and (min-width: 720px) {
    .post {
      border-bottom: 1px solid $border;
      width: calc(50% - 40px);
    }
  }
</style>

