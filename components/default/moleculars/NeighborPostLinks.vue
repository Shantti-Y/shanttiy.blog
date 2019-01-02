<template>
  <ul class="neighbor-post-links">
    <li class="next"><a><i class="fa fa-angle-left" />TypeScriptを扱う際に気を付けたい事</a></li>
    <li class="prev"><a>TypeScriptを扱う際に気を付けたい事<i class="fa fa-angle-right" /></a></li>
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
  .neighbor-post-links {
    text-align: center;

    li {
      margin-bottom: 15px;
      a {
        color: $main-text;

        &:hover {
          cursor: pointer;
          color: $main-hover;
          text-decoration: underline;
          i {
            color: $main-hover;
          }
        }
      }
    }
    .next {
      i {
        margin-right: 9px;
      }
    }
    .prev {
      i {
        margin-left: 9px;
      }
    }
  }
</style>

