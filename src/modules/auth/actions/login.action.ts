import { backendApi } from "@/config/api/backendApi";
import type { LoginRequest } from "../interfaces/login.request";
import type { LoginResponse } from "../interfaces/login.response";

export const loginAction = async (payload: LoginRequest): Promise<LoginResponse> => {
  try {
    const { data } = await backendApi.post<LoginResponse>("/auth/login", payload);

    if (!data)
      throw "Error al iniciar sesión";

    return data;

  } catch (err) {
    console.log(err);
    throw "Error al iniciar sesión";
  }
}
