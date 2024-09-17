import { Suspense } from "react";
import { PacmanLoader } from "react-spinners";
import { AppBar } from "../AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<PacmanLoader color="#ffd600" />}>
        {children}
      </Suspense>
    </div>
  );
};
