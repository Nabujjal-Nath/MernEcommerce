import React from "react";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome to Just Shop</h1>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
