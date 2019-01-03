<template>
  <ul class="tag-list">
    <li><i class="fa fa-tag" /></li>
    <li><tag v-for="tag in tags" :key="tag.id" :tag="tag" /></li>
  </ul>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import Tag from '@/components/default/atoms/Tag.vue';
  
  export default Vue.extend({
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    components: {
      Tag
    },
    computed: {
      ...mapGetters({
        findTagList: 'tags/findTagList'
      }),
      tags(){
        return this.findTagList(this.post.tags)
      }
    }
  });
</script>

<style lang="scss" scoped>
.tag-list {
  li {
    display: inline-block;
    font-size: 12px;
    &:first-child {
      font-size: 14px;
      i {
        color: $link-text;
      }
    }
  }
}
</style>

