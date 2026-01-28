import { Navigate, Outlet } from "react-router";
import { userContextData } from "../Contexts/AuthContext";
const ProtectedRoute = () => {
  const { user, loading } = userContextData();
  if (loading) {
    return <h1>Checking Permissions...</h1>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
