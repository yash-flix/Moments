import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute = ({ redirectPath = '/login' }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();

  // While loading, you might render a spinner or null
  if (isLoading) {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  }

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to={redirectPath} replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;