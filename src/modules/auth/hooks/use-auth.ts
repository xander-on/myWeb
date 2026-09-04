import { useMutation, useQuery } from "@tanstack/react-query";
import { registerAction } from "@/modules/auth/actions/register.action";
import { loginAction } from "@/modules/auth/actions/login.action";
import { validateTokenAction } from "../actions/validate-token.action";

export const useAuth = () => {
  const registerMutation = useMutation({
    mutationFn: registerAction
  });

  const loginMutation = useMutation({
    mutationFn: loginAction
  });

  const token = localStorage.getItem("token");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["verify-auth", token],
    queryFn: validateTokenAction,
    enabled: !!token,
    retry: false,
  });

  return {
    registerMutation,
    loginMutation,
    verifyAuth: {
      isValid  : data?.valid ?? false,
      isLoading,
      refetch,
    },
  };
}
