import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/modules/auth/hooks/use-auth";
import { GeneralLoader } from "@/modules/shared/components/GeneralLoader";

export const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  const { verifyAuth } = useAuth();
  const { isValid, isLoading } = verifyAuth;

  if (!token)
    return <Navigate to="/login" replace />;

  if (isLoading)
    return <GeneralLoader />;

  if (!isValid) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
