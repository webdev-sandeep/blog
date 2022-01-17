<template>
  <div class="home">
    <h1>Home</h1>
    <p v-if="errors">{{ errors }}</p>
    <div v-if="blogs.length" class="layout">
      <div><Blogs :blogs="blogs" /></div>
      <TagsCloud :blogs="blogs"/>
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import Blogs from "../components/Blogs.vue";
import getBlogs from "../composables/getBlogs.js";
import Spinner from "../components/Spinner.vue";
import TagsCloud from "../components/TagCloud.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Blogs, Spinner, TagsCloud },
  setup() {
    const { blogs, errors, load } = getBlogs();
    load();
    return { blogs, errors };
  },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
