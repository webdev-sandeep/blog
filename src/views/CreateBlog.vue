<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title : </label>
      <input v-model="title" type="text" required />
      <label>Content : </label>
      <textarea v-model="body" required></textarea>
      <label>Tags (Hit enter to add a tag): </label>
      <input v-model="tag" @keydown.enter.prevent="handleTag" type="text" />
      <div class="pill" v-for="tag in tags" :key="tag">#{{ tag }}</div>
      <button>Create Blog</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import {useRouter} from 'vue-router'
import {projectFirestore,timestamp} from '../firebase/config.js'
export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);
    const router = useRouter();


    // const uri = "http://localhost:3000/blogs";
    const handleTag = () => {
      if (!tags.value.includes(tag.value)) {
        /* ------------------------- FOR REMOVING WHITESPACE ------------------------ */

        tag.value = tag.value.replace(/\s/, "");

        /* -------------------------------------------------------------------------- */

        tags.value.push(tag.value);
      }
      tag.value = "";
      console.log(tags.value);
    };
    const handleSubmit = async () => {
      const blog = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt:timestamp(),
      };
      // await fetch("http://localhost:3000/blogs", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(blog),
      // });
      const res = await projectFirestore.collection('blogs').add(blog)
      router.push({name:'Home'})
    };
    return { title, body, tag, tags, handleTag, handleSubmit };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}

textarea {
  height: 160px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: crimson;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}

button {
  display: block;
  margin-top: 30px;
  background-color: crimson;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background-color: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>