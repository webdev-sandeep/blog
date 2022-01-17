<template>
  <div class="blog">
    <router-link :to="{ name: 'Details', params: { id: blog.id } }"
      ><h3>{{ blog.title }}</h3></router-link
    >

    <p>{{ snippet }}</p>
    <span v-for="tag in blog.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["blog"],
  setup(props) {
    const snippet = computed(() => {
      return props.blog.body.substring(0, 100) + "....";
    });
    return { snippet };
  },
};
</script>

<style>
.blog{
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
}

.blog h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
}

.blog h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: crimson;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30;
    transform: rotateZ(-1deg);
}

</style>