//edit file cart , selector
import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

import { useDispatch } from "react-redux";

import FormContainer from "../components/FormContainer";
import CheckoutStep from "../components/CheckoutStep";
import { saveShippingAddress } from "../actions/cartAction";

const ShippingScreen = ({ history }) => {
  // const cart = useSelector((state) => state.cart);
  // const { shippingAddress } = cart;
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };
  return (
    <div>
      <FormContainer>
        <CheckoutStep step1 step2 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            <Form.Label>Address </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="postalCode">
            <Form.Label>Postal Code </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter PostalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label>Country </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Countinue
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default ShippingScreen;
