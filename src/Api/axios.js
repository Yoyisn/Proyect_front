import axios from "axios";

const instance = axios.create({
    baseURL: 'https://servitechback.vercel.app',
    withCredentials: true,
});

export default instance;
