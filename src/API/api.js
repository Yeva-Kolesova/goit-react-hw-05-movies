import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '43654f1e859884c40cb9c2c9cccb75a8',
    },
});
