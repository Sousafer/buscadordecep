import axios from "axios";

// https://www.viacep.com.br/ws/01310930/json/

const api = axios.create({
    baseURL: "https://www.viacep.com.br/ws"
});

export default api;