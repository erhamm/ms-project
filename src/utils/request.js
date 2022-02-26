import axios from "axios";

const server = axios.create({
  baseURL: "",
  timeout: 5000,
});

server.interceptors.request.use((config) => {
  return config;
});

server.interceptors.response.use((res) => {
  return res.data;
});

export default server;
