<template>
  <div class="post-thumbnail">
    <img :src="thumbnailSourceUrl" alt="記事1">
  </div>
</template>

<script>
  import Vue from 'vue';
  
  export default Vue.extend({
    props: {
      thumbnailUrl: {
        type: String,
        required: false
      }
    },
    computed: {
      thumbnailSourceUrl(){
        return this.thumbnailUrl || '/images/art1.jpg'
      }
    }
  });
</script>

<style lang="scss">
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
</style>

