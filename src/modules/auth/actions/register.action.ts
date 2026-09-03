import { backendApi } from "@/config/api/backendApi";
import type { RegisterRequest } from "../interfaces/register.request";
import type { RegisterResponse } from "../interfaces/register.response";

export const registerAction = async (payload: RegisterRequest)
: Promise<RegisterResponse> => {
  try {
    const { data } = await backendApi.post<RegisterResponse>("/auth/register", payload);

    if (!data)
      throw "Error al registrarse";

    return data;
    
  } catch (err) {
    console.log(err);
    throw "Error al registrarse";
  }
}
