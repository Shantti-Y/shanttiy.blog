<template>
  <aside>
    <div id="profile" class="aside-content">
      <h2>Profile</h2>
      <div id="profile-header">
        <img :src="'/images/profile.jpg'" alt="profile">
        <p>Takahiro Yoshioka<br />(ShanttiY)</p>
      </div>
      <p>
        知識ゼロから転職して、今は東京のWeb系のベンチャーでソフトウェアプログラマをやっています。<br/>
        週末1~2日の副業をやってみたいと考えています。<br/>
        使っている言語はRuby/JS/(まれに)Kotlin
      </p>
    </div>
    <div id="search" class="aside-content">
      <h2>Search</h2>
      <div class="input-wrapper">
        <input type="text"
          :placeholder="`キーワード検索`"
          v-model="searchValue"
          @keyup.enter="jumpToSearchPath"
        >
        <div class="search-btn" >
          <i class="fa fa-search" />
        </div>
      </div>
    </div>
    <div id="latest-posts" class="aside-content">
      <h2>Latest Posts</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <nuxt-link :to="`/posts/${post.id}`">
            <img v-if="post.jetpack_featured_media_url" :src="post.jetpack_featured_media_url" :alt="post.title.rendered">
            <p :class="!post.jetpack_featured_media_url ?`no-thumbnail` : ``">{{ post.title.rendered }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div id="archives" class="aside-content">
      <h2>Category</h2>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <nuxt-link :to="`/categories/${category.id}`">{{ category.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  import Vue from 'vue';
  import { mapState, mapActions } from 'vuex';
  import { fetchPostsIndex } from '@/apis/posts';
  
  export default Vue.extend({
    data(){
      return {
        searchValue: '',
        posts: []
      }
    },
    computed: {
      ...mapState({
        categories: state => state.categories.dataList
      })
    },
    async created() {
      const { posts } = await fetchPostsIndex({ per_page: 5 });
      this.posts = posts;
    },
    methods: {
      jumpToSearchPath() {
        if(this.searchValue != ''){
          this.$router.push(`/posts?q=${this.searchValue}`)
        }
      }
    }
  });
</script>

<style lang="scss" scoped>
  aside {
    .aside-content {
      padding: 20px 9px 32px 9px;
      h2 {
        font-size: 19px;
        padding-left: 12px;
        margin-bottom: 12px;
        border-left: 4px solid $quoteblock;
      }
    }

    #profile {
      #profile-header {
        overflow: hidden;
        padding-bottom: 12px;
        img {
          float: left;
          width: 80px;
          height: 80px;
          border-radius: 3px;
        }
        a {
          float: left;
          width: calc(100% - 90px);
          margin-left: 8px;
          color: $link-text;
          line-height: 140%;
          text-decoration: underline;
          text-decoration-style: dotted;

          &:hover {
            cursor: pointer;
            color: $link-hover;
          }
        }
      }
      p {
        font-size: 12px;
        line-height: 160%;
      }
    }
    #search {
      .input-wrapper {
        position: relative;
        
        * {
          display: inline-block;
        }

        input {
          width: calc(100% - 16px);
          padding: 4px 7px;
          font-size: 13px;
          border: 1px solid $border;
          border-radius: 3px;

          &:focus {
            border: none;
            padding: 5px 8px;

            + .search-btn {
              border-radius: 0;
            }
          }
        }

        .search-btn {
          position: absolute;
          border-left: 1px solid $border;
          top: 1px;
          right: 1px;
          width: 30px;
          padding: 5px 0 3px 0;
          text-align: center;
          border-bottom-right-radius: 3px;
          border-top-right-radius: 3px;

          i {
            margin: 0;
            font-size: 13px;
          }

          &:hover {
            cursor: pointer;
          }
          &:active {
          }
        }
      }
    }
    #latest-posts {
      li {
        width: 100%;
        
        a {
          display: block;
          overflow: hidden;
          width: 100%;
          margin: 12px 0;
          word-break: break-all;
          
          img {
            float: left;
            width: 70px;
            height: 70px;
          }
          p {
            color: $link-text;
            text-decoration: underline;
            text-decoration-style: dotted;
            float: right;
            line-height: 160%;
            width: calc(100% - 80px);
            font-size: 14px;
          }
          .no-thumbnail {
            width: 100%;
          }

          &:hover {
            cursor: pointer;
            p {
              color: $link-hover;
            }
          }
        }
      }
    }
    #archives {
      li {
        margin: 12px;
        font-size: 14px;
        a {
          color: $link-text;
          text-decoration: underline;
          text-decoration-style: dotted;
          &:hover {
            cursor: pointer;
            color: $link-hover;
          }
        }
      }
    }
  }
  @media all and (max-width: 720px) {
    aside {
      width: 100%;
    }
  }
  @media all and (min-width: 720px) {
    aside {
      float: right;
      width: 30%;
    }
  }
</style>

