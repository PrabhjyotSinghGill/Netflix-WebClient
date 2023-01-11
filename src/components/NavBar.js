import React, { useEffect, useState } from "react";
import "../views/NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src="/Netflix.png" alt=""></img>
        <img className="nav__avatar" src="avatar.jpg" alt="Gill"></img>
      </div>
    </div>
  );
}

export default NavBar;
