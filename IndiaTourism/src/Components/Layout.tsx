import React from "react";
import Footer from "./Footer/Footer";
import { Outlet } from 'react-router-dom';
import Navbar from "./Nav/Navbar"; // adjust if path is different


const Layout: React.FC = () => {
  return (
    <>
     <Navbar />
      <main style={{ padding: "2rem", maxWidth: "100%", margin: "0 auto" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
// src/routes/routes.tsx
