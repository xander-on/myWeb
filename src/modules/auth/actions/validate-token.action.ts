import { backendApi } from "@/config/api/backendApi";
import type { ValidateTokenResponse } from "../interfaces/validate-token.response";

export const validateTokenAction = async (): Promise<ValidateTokenResponse> => {
  try {
    await backendApi.get("/auth/validate-token");
    return { valid: true };

  } catch (err) {
    console.log(err);
    return { valid: false };
  }
}
