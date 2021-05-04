import React from "react";
import { Navbar, Nav, Button, FormControl, Form } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "30px",
            // background: "black",
            color: "blue",
            background: "blue",
          }}
        >
          <h2>J$P</h2>
          <div style={{ color: "white", padding: "20px" }}>
            <a href="cart">cart</a>
            <a href="/signup">signup</a>
          </div>
        </div>
      </>
    </div>
  );
};

export default Header;
