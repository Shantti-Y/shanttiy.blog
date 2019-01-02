<template>
  <ul class="tag-list">
    <li><i class="fa fa-tag" /></li>
    <li><tag /></li>
  </ul>
</template>

<script>
  import Vue from 'vue';
  import Tag from '@/components/default/atoms/Tag.vue';
  
  export default Vue.extend({
    components: {
      Tag
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

