import axios from "axios";

const instance = axios.create({
    baseURL: 'servitech-azure.vercel.app',
    withCredentials: true,
});

export default instance;
