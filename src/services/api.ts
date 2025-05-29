// src/services/api.ts
import axios from "axios";

const api = axios.create({
    baseURL: "https://sua-api.com/api", // coloque a URL correta aqui
});

export default api;
