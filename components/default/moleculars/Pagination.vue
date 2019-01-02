<template>
  <ul class="pagination">
    <li class="left"><a><i class="fa fa-angle-left" />前のページへ</a></li>
    <li class="right"><a>次のページへ<i class="fa fa-angle-right" /></a></li>
  </ul>
</template>

<script>
  import Vue from 'vue';
  
  export default Vue.extend({
    components: {
      
    }
  });
</script>

<style lang="scss">
  .pagination {
    width: 100%;
    overflow: hidden;

    li {
      display: inline-block;
    }
    .left {
      float: left;
      margin-left: 4%;
      i {
        margin-right: 9px;
      }
    }
    .right {
      float: right;
      margin-right: 4%;
      i {
        margin-left: 9px;
      }
    }

    a {
      font-size: 13px;
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
</style>

