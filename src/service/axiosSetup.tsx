import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-hss.vercel.app/api/v1",
});

export default instance;
