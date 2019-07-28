import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Memory Game
      </a>
      {/* <Scoreboard score={props.score} highScore={props.highScore} /> */}
      <ul className="navbar-nav">
        <li>{props.message}</li>
        <li className="nav-item">
          Score: {props.score} | High Score: {props.highScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
