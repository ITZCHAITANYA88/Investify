import axios from "axios";

const API = axios.create({
  baseURL: "https://investify-smft.onrender.com",
  withCredentials: true, // ✅ this enables sending cookies
});

export default API;