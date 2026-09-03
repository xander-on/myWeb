import { useMutation } from "@tanstack/react-query";
import { registerAction } from "@/modules/auth/actions/register.action";
import { loginAction } from "@/modules/auth/actions/login.action";

export const useAuth = () => {
  const registerMutation = useMutation({
    mutationFn: registerAction
  });

  const loginMutation = useMutation({
    mutationFn: loginAction
  });

  return {
    registerMutation,
    loginMutation
  };
}
