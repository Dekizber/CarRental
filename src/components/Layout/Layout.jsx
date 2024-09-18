import { Suspense } from "react";
import { PacmanLoader } from "react-spinners";
import { AppBar } from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<PacmanLoader color="#ffd600" />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
