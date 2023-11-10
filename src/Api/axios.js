import axios from "axios";

const instance = axios.create({
    baseURL: 'servitech-yoyisnts-projects.vercel.app/api',
    withCredentials: true,
});

export default instance;
