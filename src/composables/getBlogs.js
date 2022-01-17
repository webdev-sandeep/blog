import { ref } from 'vue';
import {projectFirestore} from '../firebase/config.js'

const getBlogs = () => {
	const blogs = ref([]);
	const errors = ref(null);
	const uri = 'http://localhost:3000/blogs';
	const load = async () => {
		try {
			/* ----------------------------- LOADING TIMEOUT ---------------------------- */
			// await new Promise((resolve) => {
			// 	setTimeout(resolve, 1000);
			// });

			/* -------------------------------------------------------------------------- */

			// let data = await fetch(uri);
			// if (!data.ok) {
			// 	throw Error('No data available!');
			// }
			// blogs.value = await data.json();
			const res = await projectFirestore.collection('blogs').orderBy('createdAt','desc').get()
			blogs.value = res.docs.map(doc=>{
				return {...doc.data(),id:doc.id}
			})

		} catch (error) {
			errors.value = error.message;
		}
	};
	return { blogs, errors, load };
};

export default getBlogs;
