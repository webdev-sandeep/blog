import { ref } from 'vue';
import {projectFirestore} from '../firebase/config.js'

const getBlog = (id) => {
	const blog = ref(null);
	const errors = ref(null);
	const uri = 'http://localhost:3000/blogs/'+id;
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
			// blog.value = await data.json();

			const res = await projectFirestore.collection('blogs').doc(id).get()
			if(!res.exists){
				throw Error ('That Post Does not Exist');
			}
			blog.value = {
				id:res.id,
				...res.data()
			}
		} catch (error) {
			errors.value = error.message;
		}
	};
	return { blog, errors, load };
};

export default getBlog
