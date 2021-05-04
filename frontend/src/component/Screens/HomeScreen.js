import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../../products";
import Product from "../Product/Product";
const HomeScreen = () => {
  return (
    <div>
      <Row>
        {products.map((products) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product pro={products} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
