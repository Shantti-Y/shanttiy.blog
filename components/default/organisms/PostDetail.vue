<template>
  <div class="post-detail">
    <div class="post-header">
      <h1>{{ post.title.rendered }}</h1>
      <blog-item-list :post="post" />
      <tag-list :post="post" />
      <social-button-list />
    </div>
    <div class="post-content" v-html="sanitizedHTML">
    </div>
    <div class="post-footer">
      <blog-item-list :post="post" />
      <tag-list :post="post" />
      <social-button-list />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import BlogItemList from '@/components/default/moleculars/BlogItemList.vue';
  import TagList from '@/components/default/moleculars/TagList.vue';
  import SocialButtonList from '@/components/default/moleculars/SocialButtonList.vue';
  
  export default Vue.extend({
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    components: {
      BlogItemList,
      TagList,
      SocialButtonList
    },
    computed: {
      sanitizedHTML(){
        return this.$sanitize(
          this.post.content.rendered,
          { allowedTags: this.$sanitize.defaults.allowedTags.concat(['h2']) }
        )
      }
    }
  });
</script>

<style lang="scss" scoped>
  .post-detail {
    margin: 15px;
    border-bottom: 1px solid $border;
    .post-header, .post-footer {
      h1 {
        word-break: break-all;
        font-size: 25px;
        font-weight: bold;
        padding-bottom: 12px;
        border-bottom: 1px solid $main-text;
        line-height: 140%;
        margin-bottom: 12px;
      }
      ul {
        margin-bottom: 18px;
        li {
          display: inline-block;
        }
      }
    }
    /deep/ .post-content {
      margin: 55px 0 30px 0;
      h2, h3, h4, h5, h6 {
        margin-bottom: 14px;
      }
      h2 {
        font-size: 22px;
      }
      h3 {
        font-size: 19px;
      }
      h4 {
        font-size: 16px;
      }
      h5 {
        font-size: 13px;
      }
      h6 {
        font-size: 10px;
      }
      p {
        line-height: 175%;
        font-size: 14px;
        margin-bottom: 15px;
      }
      ol, ul {
        margin: 0 0 15px 5%;
        li {
          font-size: 14px;
          margin-bottom: 11px;
        }
      }
      ul {
        list-style: circle;
      }
      a {
        display: inline-block;
        font-size: 14px;
        margin: 0 0 15px 5px;
        color: $link-text;
        text-decoration: underline;
        text-decoration-style: dotted;
        &:hover {
          color: $link-hover;
        }
      }
      img {
        width: 90%;
        max-width: 440px;
        margin: 0 auto 20px auto;
      }
      pre {
        background-color: $code-background;
        margin-bottom: 20px;
        code {
          color: white;
          font-size: 12px;
          line-height: 170%;
        }
      }
      
      table {
        tr {
          * {
            padding: 9px 4px;
            font-size: 14px;
          }
        }
        thead {
          th {
            background-color: #006699;
            color: white;
          }
        }
        tbody {
          td {
            background-color: #cceeff;
          }
        }
      }
      blockquote {
        margin: 12px 0;
        border-left: 2px solid $quoteblock;
        padding: 6px 0;
      
        p {
          padding-left: 9px;
          color: $quoteblock;
          margin-bottom: 0;
        }
      }

      hr {
      }
    }
  }
</style>

