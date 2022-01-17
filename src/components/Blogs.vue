<template>
  <div class="blogs" v-for="blog in blogs" :key="blog">
      <SingleBlog :blog="blog"/>
  </div>
</template>

<script>
import SingleBlog from './SingleBlog.vue'
export default {
    components:{SingleBlog},
    props:['blogs']
}
</script>

<style>
</style>