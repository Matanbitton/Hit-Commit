import React from "react";
import NavButtons from "./NavButtons";

export default function Nav() {
  return (
    <nav className="navigation">
      <img className="logo" src="" alt=""></img>
      <div className="temp">
        <input placeholder="Search"></input>
        <NavButtons />
      </div>

      <div className="icons">
        <p className="bell">bell icon</p>
        <p className="bell">plus icon</p>
      </div>
      <img className="profile-pic" src="" alt=""></img>
    </nav>
  );
}
