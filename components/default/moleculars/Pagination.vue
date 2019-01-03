<template>
  <ul class="pagination">
    <li
      v-if="pageNumber > 1"
      class="left"
      @click="changePageNumber(pageNumber - 1)"
    >
      <span><i class="fa fa-angle-left" />前のページへ</span>
    </li>
    <li
      v-if="pageNumber < pageTotal"
      class="right"
      @click="changePageNumber(pageNumber + 1)"
    >
      <span>次のページへ<i class="fa fa-angle-right" /></span>
    </li>
  </ul>
</template>

<script>
  import Vue from 'vue';
  import { mapState, mapActions } from 'vuex';
  
  export default Vue.extend({
    methods: {
      ...mapActions({
        initializePostList: 'posts/initializePostList'
      }),
      async changePageNumber(page) {
        await this.initializePostList({page: page});
        this.$router.push({ query: { page: page } });
      }
    },
    computed: {
      ...mapState({
        total: state => state.posts.total
      }),
      pageTotal() {
        const num = Math.ceil(this.total / 10)
        return num === 0 ? 1 : num
      },
      pageNumber(){
        return this.$route.query['page'] || 1
      }
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

    span {
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

