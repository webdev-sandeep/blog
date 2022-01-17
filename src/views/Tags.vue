<template>
  <div class="tags">
    <div v-if="error">{{ error }}</div>
    <div v-if="blogs.length" class="layout">
      <div><Blogs :blogs="blogsWithTags" /></div>
      <TagsCloud :blogs="blogs" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import getBlogs from "../composables/getBlogs.js";
import Blogs from "../components/Blogs.vue";
import TagsCloud from "../components/TagCloud.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  components: { Blogs, Spinner, TagsCloud },
  setup() {
    const route = useRoute();
    const { blogs, error, load } = getBlogs();
    load();
    const blogsWithTags = computed(() => {
      return blogs.value.filter((blog) => blog.tags.includes(route.params.tag));
    });
    return { blogsWithTags, blogs, error };
  },
};
</script>

<style>
.tags{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>