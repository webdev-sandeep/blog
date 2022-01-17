<template>
  <div v-if="errors">{{ errors }}</div>
  <div v-if="blog" class="blog">
    <h3>{{ blog.title }}</h3>
    <p class="pre">{{ blog.body }}</p>
    <button @click="handleDelete" class="delete">Delete Blog</button>
  </div>
</template>

<script>
import getBlog from "../composables/getBlog.js";
import { useRouter} from 'vue-router'
import { projectFirestore } from '../firebase/config.js';
export default {
  name: "Details",
  props: ["id"],
  setup(props) {
    const router = useRouter()
    const { blog, errors, load } = getBlog(props.id);
    load();
    const handleDelete = async() =>{
      await projectFirestore.collection('blogs').doc(props.id).delete()
      router.push({name:'Home'})
    } 
    return { blog, errors, handleDelete };
  },
};
</script>

<style>
.blog{
    max-width: 1200px;
    margin: 0 auto;
}

.blog p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre{
    white-space: pre-wrap;
}
button.delete{
  margin: 10px auto;
}
</style>