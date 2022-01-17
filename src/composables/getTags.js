import {ref} from 'vue'

const getTags = (blogs) => {
    const tags = ref([])
    const tagSet = new Set()
    blogs.forEach(blog => {
        blog.tags.forEach(tag => tagSet.add(tag))
    });
    tags.value = [...tagSet]
    return {tags}
}

export default getTags