//IMPORTS
import React from "react";
import { Routes, Route } from "react-router";

//LAYOUTS
import { RootLayout } from "./layouts/RootLayout";

//PAGES
import { Error, Home, About, Contact } from "./pages";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
