import React from "react";
import NavBar from "./components/AllComponents/NavBar/NavBar";
import Footer from "./components/AllComponents/Footer/Footer";
import { Outlet } from "react-router-dom";
import { userTokenContext } from "./Contexts/userTokenContext";

function RootLayout() {
  return (
    <userTokenContext.Provider value={localStorage.getItem("userToken")}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </userTokenContext.Provider>
  );
}

export default RootLayout;
