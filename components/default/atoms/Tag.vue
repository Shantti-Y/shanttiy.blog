<template>
  <nuxt-link :to="`/tags/${tag.id}`" class="tag">{{ tag.name }}</nuxt-link>
</template>

<script>
  import Vue from 'vue';
  
  export default Vue.extend({
    props: {
      tag: {
        type: Object,
        required: true
      }
    }
  });
</script>

<style lang="scss" scoped>
  .tag {
    color: $link-text;
    text-decoration: underline;
    text-decoration-style: dotted;
    margin-right: 8px;

    &:hover {
      color: $link-hover;
      cursor: pointer;
    }
  }
</style>

