import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Memory Game
      </a>
        <li className="nav-item">{props.message}</li>
        <li className="nav-item">
          Score: {props.score} | High Score: {props.highScore}
        </li>
    </nav>
  );
}

export default Nav;
