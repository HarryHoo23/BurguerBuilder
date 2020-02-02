import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c85e1.firebaseio.com/'
});

export default instance;