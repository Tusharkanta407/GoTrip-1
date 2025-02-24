import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_URL ??
  (import.meta.env?.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://gotrip-1-1.onrender.com/api"); // ✅ Set Render backend in production

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // ✅ Ensures cookies & auth headers are sent
  headers: {
    "Content-Type": "application/json", 
    "Accept": "application/json",
  },
});


