import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-533d7.firebaseio.com/'
})

export default instance;
