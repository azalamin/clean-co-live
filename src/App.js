import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "./authentication/AdminRoute";
import PrivetRoute from "./authentication/PrivetRoute";
import Navbar from "./components/Navbar";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";
import Dashboard from "./pages/Dashboard/Dashboard";
import User from "./pages/Dashboard/User";
import { privetRoutes } from "./routes/privetRoutes";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Navbar>
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<PrivetRoute />}>
          {privetRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="add-admin" element={<AddAdmin />} />
            <Route path="user" element={<User />} />
            <Route path="add-service" element={<AddService />} />
          </Route>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
