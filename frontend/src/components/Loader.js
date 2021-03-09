import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <Spinner
      animation="border"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
