import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="lista">

          <li><Link to ={"/"}>Home</Link></li>
            <li><Link to ={"/clientes"}>Clientes</Link></li>
           
        </ul>
      </nav>
    </div>
  );
};

export default Header;
