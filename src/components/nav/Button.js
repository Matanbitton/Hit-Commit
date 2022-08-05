import React from "react";

export default function NavButtons(props) {
  return (
    <div className="nav-buttons-container">
      <button className="nav-button">{props.text}</button>
    </div>
  );
}
