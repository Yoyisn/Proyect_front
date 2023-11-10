import axios from "axios";

const instance = axios.create({
    baseURL: 'servitech-azure.vercel.app/api',
    withCredentials: true,
});

export default instance;
