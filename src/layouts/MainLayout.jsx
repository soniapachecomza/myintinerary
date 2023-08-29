import React, { useEffect } from "react";
import HeaderHome from "../components/Header/HeaderHome.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./mainLayout.css";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  let { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 10,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <HeaderHome />
      <Outlet />
      <Footer />
    </>
  );
}
