import axios from "axios";

const instance = axios.create({
    baseURL: 'https://servitechback.vercel.app/api',
    withCredentials: true,
});

export default instance;
