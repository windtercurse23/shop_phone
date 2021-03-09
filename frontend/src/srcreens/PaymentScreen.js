import React, { useState } from "react";

import { Form, Button, Col } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import FormContainer from "../components/FormContainer";
import CheckoutStep from "../components/CheckoutStep";
import { savePaymentMethod } from "../actions/cartAction";

const PaymentSCreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress) {
    history.push("/shipping");
  }

  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <div>
      <FormContainer>
        <CheckoutStep step1 step2 step3 />
        <h1>Payment</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend">Select Method</Form.Label>
            <Col>
              <Form.Check
                id="Paypal"
                name="paymentMethod"
                value="Paypal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
                label="Paypay or Credit Card"
                type="radio"
              ></Form.Check>
              {/* <Form.Check
                id="Stripe"
                name="paymentMethod"
                value="Stripe"
                onChange={(e) => setPaymentMethod(e.target.value)}
                label="Stripe"
                type="radio"
              ></Form.Check> */}
            </Col>
          </Form.Group>
          <Button type="submit" variant="primary">
            Countinue
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default PaymentSCreen;
