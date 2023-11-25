import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-catalogo-g7s6.onrender.com"
})