import { useMutation } from "@tanstack/react-query";
import { registerAction } from "@/modules/auth/actions/register.action";

export const useAuth = () => {
  const registerMutation = useMutation({
    mutationFn: registerAction
  });

  return {
    registerMutation
  };
}
