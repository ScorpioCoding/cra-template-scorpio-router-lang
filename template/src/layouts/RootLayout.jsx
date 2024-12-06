// Imports
import { Outlet } from "react-router";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
