<template>
  <div class="tag-cloud">
      <h3>Tags</h3>
      <div v-for="tag in tags" :key="tag">
          <router-link :to="{name:'Tags', params:{tag:tag}}">#{{tag}}</router-link>
      </div>
  </div>
</template>

<script>
import getTags from '../composables/getTags.js'
export default {
    props:['blogs'],
    setup(props){
        const {tags} = getTags(props.blogs)
        return {tags}
    }
}
</script>

<style>
    .tag-cloud {
        padding: 10px;
    }

    .tag-cloud h3 {
        border-bottom: 1px solid #eee;
        padding: 16px 8px;
        color: #444;
    }

    .tag-cloud div{
        display: inline-block;
        padding: 10px;
    }
    .tag-cloud a{
        text-decoration: none;
        color: #ccc;
    }
    .tag-cloud a.router-link-active {
        color: crimson;
        font-weight: bold;
    }
</style>