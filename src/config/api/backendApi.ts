import axios from "axios";
import { envs } from "@/config/envs";

export const backendApi = axios.create({
  baseURL: `${envs.backendUrl}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

backendApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token)
    config.headers.Authorization = `Bearer ${token}`;
  return config;
});
