import React from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-light">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
