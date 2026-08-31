import axios from "axios";
import { envs } from "@/config/envs";

export const backendApi = axios.create({
  baseURL: envs.adminApi,
  headers: {
    "Content-Type": "application/json",
  },
});
