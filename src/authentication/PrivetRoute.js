import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivetRoute = () => {
  const location = useLocation();
  const user = true;
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivetRoute;
