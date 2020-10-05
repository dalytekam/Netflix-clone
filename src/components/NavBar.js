import React, { useEffect, useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [blackBackground, setBlackBackground] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80
        ? setBlackBackground(true)
        : setBlackBackground(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${blackBackground && "blackBg"}`}>
      <div className="navbar__logo">
        <img
          src="../assets/netflix-2-logo-png-transparent.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="navbar__avatar">
        <img src="../assets/netflix avatar.png" alt="Netflix Avatar" />
      </div>
    </div>
  );
};

export default NavBar;
