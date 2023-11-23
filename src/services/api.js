import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-catalogo-bpwb.onrender.com"
})