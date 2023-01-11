import React from "react";
import "../views/HomeScreen.css";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <NavBar></NavBar>
      {/* Banner*/}
      <Banner></Banner>
      {/* Rows */}
    </div>
  );
}

export default HomeScreen;
