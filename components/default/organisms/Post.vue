<template>
  <article class="post">
    <div class="post-header">
      <a href="">
        <div class="post-thumbnail">
          <img :src="require('@/assets/images/art1.jpg')" alt="記事1">
        </div>
        <p>あんなものこんなもの開発しました。←それってただ勉強のために作ったガラクタで人に見せる気ないんでしょ？</p>
      </a>
    </div>
    <div class="post-body">
      <blog-item-list />
      <tag-list />
    </div>
  </article>
</template>

<script>
  import Vue from 'vue';
  import BlogItemList from '@/components/default/moleculars/BlogItemList.vue';
  import TagList from '@/components/default/moleculars/TagList.vue';
  
  export default Vue.extend({
    components: {
      BlogItemList,
      TagList
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
        .post-thumbnail {
          width: 100%;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          &:before {
            content: "";
            display: block;
            padding-top: 60%;
          }
          img {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }
        }
        p {
          margin-top: 12px;
          line-height: 130%;
          
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

