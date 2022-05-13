import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
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
      </Routes>
    </Navbar>
  );
}

export default App;
