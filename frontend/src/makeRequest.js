import axios from "axios";

const URL = import.meta.env.VITE_API_URL;
const TOKEN = import.meta.env.VITE_API_TOKEN;
export const makeRequest = axios.create({
  baseURL: URL,
  headers: {
    Authorization: "bearer " + TOKEN,
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
