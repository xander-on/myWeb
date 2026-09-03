import type { VerifyAuthResponse } from "../interfaces/verify-auth.response";

export const verifyAuthAction = async (): Promise<VerifyAuthResponse> => {
  try {
    // TODO: conectar cuando exista el backend
    // const { data } = await backendApi.get<VerifyAuthResponse>("/auth/verify");
    // return data;

    return { valid: true };

  } catch (err) {
    console.log(err);
    return { valid: false };
  }
}
