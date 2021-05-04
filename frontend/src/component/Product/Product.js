import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ pro }) => {
  return (
    <div>
      <Card className="my-3 p-3">
        {" "}
        <a href={`products/${pro.id}`}>
          <Card.Img src={pro.image} />
        </a>
        <Card.Body>
          <a href={`products/${pro.id}`} style={{ textDecoration: "none" }}>
            <Card.Title as="div">
              <p style={{ fontFamily: "sans-serif" }}>{pro.name}</p>
            </Card.Title>
          </a>
          <Card.Text>
            {pro.rating} from {pro.numreviews} reviews
          </Card.Text>
          <Card.Text>
            <h3>${pro.price}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
