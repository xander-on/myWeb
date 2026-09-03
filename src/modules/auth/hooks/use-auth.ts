import { useMutation, useQuery } from "@tanstack/react-query";
import { registerAction } from "@/modules/auth/actions/register.action";
import { loginAction } from "@/modules/auth/actions/login.action";
import { verifyAuthAction } from "@/modules/auth/actions/verify-auth.action";

export const useAuth = () => {
  const registerMutation = useMutation({
    mutationFn: registerAction
  });

  const loginMutation = useMutation({
    mutationFn: loginAction
  });

  const { data, isLoading } = useQuery({
    queryKey: ["verify-auth"],
    queryFn: verifyAuthAction,
    enabled: !!localStorage.getItem("token"),
  });

  return {
    registerMutation,
    loginMutation,
    verifyAuth: {
      isValid  : data?.valid ?? false,
      isLoading,
    },
  };
}
