import React from "react";
import NavButtons from "./NavButtons";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
export default function Nav() {
  return (
    <nav className="navigation">
      <img className="logo" src={logo} alt=""></img>
      <div className="temp">
        <input placeholder="Search"></input>
        <NavButtons />
      </div>

      <div className="icons">
        <p className="bell">
          <FontAwesomeIcon icon={faBell} />
        </p>
        <p className="plus">+ ▼</p>
        <img className="profile-pic" src={user} alt=""></img>
        <p className="profile-arrow">▼</p>
      </div>
    </nav>
  );
}
