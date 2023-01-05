import axios from 'axios';
const back = axios.create({
	baseURL: 'https://videogames-production-.up.railway.app/',
});
export default back;
