import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

interface PublicRouteProps {
  restricted?: boolean; // Optional: If true, only accessible when NOT authenticated
  redirectPath?: string;
}

// This component is used for routes that should NOT be accessible to authenticated users,
// like Login and Signup pages.
const PublicRoute = ({ restricted = true, redirectPath = '/dashboard' }: PublicRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();

  console.log("PublicRoute - isAuthenticated:", isAuthenticated, "isLoading:", isLoading); // Add logging

  // While loading, you might render a spinner or null
  if (isLoading) {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  }

  if (isAuthenticated && restricted) {
    // If authenticated and the route is restricted, redirect
    console.log("PublicRoute - Redirecting to:", redirectPath); // Log redirection
    return <Navigate to={redirectPath} replace />;
  }

  // If not authenticated, or the route is not restricted, render the child routes
  return <Outlet />;
};

export default PublicRoute;