<template>
  <aside>
    <div id="profile" class="aside-content">
      <h2>Profile</h2>
      <div id="profile-header">
        <img :src="'/images/profile.jpg'" alt="profile">
        <a>Takahiro Yoshioka<br />(ShanttiY)</a>
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
        >
        <div class="search-btn" >
          <i class="fa fa-search" />
        </div>
      </div>
    </div>
    <div id="latest-posts" class="aside-content">
      <h2>Latest Posts</h2>
      <ul>
        <li>
          <a>
            <p class="no-thumbnail">初心者がTypeScriptを始めるときに気を付ける事や事前準備について</p>
          </a>
        </li>
        <li>
          <a>
            <img :src="'@/static/images/art1.jpg'" alt="記事1">
            <p>初心者がTypeScriptを始めるときに気を付ける事や事前準備について</p>
          </a>
        </li>
        <li>
          <a>
            <p class="no-thumbnail">初心者がTypeScriptを始めるときに気を付ける事や事前準備について</p>
          </a>
        </li>
        <li>
          <a>
            <img :src="'@/static/images/art1.jpg'" alt="記事1">
            <p>初心者がTypeScriptを始めるときに気を付ける事や事前準備について</p>
          </a>
        </li>
        <li>
          <a>
            <img :src="'@/static/images/art1.jpg'" alt="記事1">
            <p>初心者がTypeScriptを始めるときに気を付ける事や事前準備について</p>
          </a>
        </li>
      </ul>
    </div>
    <div id="archives" class="aside-content">
      <h2>Archives</h2>
      <ul>
        <li><a>2018年1月(12)</a></li>
        <li><a>2018年1月(16)</a></li>
        <li><a>2018年1月(19)</a></li>
        <li><a>2018年1月(11)</a></li>
        <li><a>2018年1月(11)</a></li>
        <li><a>2018年1月(11)</a></li>
        <li><a>2018年1月(12)</a></li>
      </ul>
    </div>
  </aside>
</template>

<script>
  import Vue from 'vue';
  
  export default Vue.extend({

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

