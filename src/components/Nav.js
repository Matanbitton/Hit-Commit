import React from "react";
import NavButtons from "./NavButtons";

export default function Nav() {
  return (
    <nav>
      <img className="logo" src="" alt=""></img>
      <input placeholder="Search"></input>
      <NavButtons />
      <p className="bell">bell icon</p>
      <p className="bell">plus icon</p>
      <img className="profile-pic"></img>
    </nav>
  );
}
