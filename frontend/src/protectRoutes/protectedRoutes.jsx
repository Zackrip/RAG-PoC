import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const accessToken = localStorage.getItem("token");

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
