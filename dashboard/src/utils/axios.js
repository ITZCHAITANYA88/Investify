import axios from "axios";
import { API_URL } from "../components/config"; // import local backend URL

const API = axios.create({
  baseURL: API_URL, // ✅ use local backend
  withCredentials: true,
});

export default API;
