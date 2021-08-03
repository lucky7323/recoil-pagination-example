import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <nav className="inner">
          <NavLink to="/home" activeClassName="nav-active">
            Home
          </NavLink>
          <NavLink to="/board" activeClassName="nav-active">
            Board
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
