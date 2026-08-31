import axios from "axios";
import { envs } from "@/config/envs";

export const strapiApi = axios.create({
  baseURL: envs.strapiGraphql,
  headers: {
    "Content-Type": "application/json",
  },
});
