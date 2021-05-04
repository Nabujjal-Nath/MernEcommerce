import React from "react";
// import { Navbar, Nav, Button, FormControl, Form } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div id="nav">
        <h2 id="jsp">J$hòP</h2>
        <div>
          <a href="cart">
            <i class="fas fa-shopping-cart"></i>cart
          </a>
          <a href="signup">
            <button className="btn">signup</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
