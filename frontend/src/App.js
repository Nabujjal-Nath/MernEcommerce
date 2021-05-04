import React from "react";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./component/Screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <HomeScreen />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
