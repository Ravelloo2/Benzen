import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./auth";
import LogoutPopup from "./LogoutPopup";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  const auth = useAuth();

  const togglePopup = () => {
    setisOpen(!isOpen);
  };

  console.log("visa popup?", isOpen)

  const handleLogout = () => {
    auth.logout(null);
    setisOpen(!isOpen)
  };

  return (
    <nav className="navBar">
      <div className="visible-links"></div>
      <Link className="navBar-content" to="/utbildningar">
        Utbildningar
      </Link>{" "}
      |
      <Link className="navBar-content" to="/Kurser">
        Kurser
      </Link>{" "}
      |
      <Link className="navBar-content" to="/personal">
        Personal
      </Link>{" "}
      |
      <Link className="navBar-content" to="/ansoka">
        Ansöka
      </Link>{" "}
      |
      <Link className="navBar-content" to="/kontakta">
        Kontakta
      </Link>{" "}
      |
      {!auth.user && (
        <Link className="navbar-content" to="/login">
          Logga in
        </Link>
      )}
      {auth.user && (
        <div>
          <input className="logout-btn" type="button" value="Logga ut" onClick={togglePopup} />
          {isOpen && (
            <LogoutPopup
              content={
                <div className="popup-window">
                  <h2 className="sure">Är du Säker på att du vill logga ut?</h2>
                  <div className="btns">
                  <button id="yes-btn" onClick={handleLogout}>Ja</button>
                  <button id="no-btn" onClick={togglePopup}>Nej</button>
                  </div>
                </div>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
