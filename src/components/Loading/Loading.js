import React from "react";
import { Spinner } from "react-bootstrap";

import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading__content">
        <Spinner animation="border" role="status" />
        <h5>Cargando...</h5>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
