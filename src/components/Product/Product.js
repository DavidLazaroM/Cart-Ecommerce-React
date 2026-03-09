import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { BASE_PATH } from "../../utils/constants";

import "./Product.scss";

export default function Product(props) {
  const { product, addProductCart } = props;
  return (
    <Col xs={3} className="product">
      <Card>
        <Card.Img variant="top" src={`${BASE_PATH}/${product.image}`} />
        <Card.Body>
          <Card.Title className="product__title">{product.name}</Card.Title>
          <Card.Text className="product__extra-info">
            {product.extraInfo}
          </Card.Text>
          <Card.Text className="product__price">
            {product.price.toFixed(2)} € / Und.
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => addProductCart(product.id, product.name)}
          >
            Añadir al carrito
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
