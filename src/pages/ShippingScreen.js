/** @format */

import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from "../components/CheckoutSteps";

function ShippingScreen({ history }) {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address);
    // const [email, setEmail] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address }))
        history.push('/payment')
    };
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="address">
                    <Form.Label>Shipping Email</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Email"
                        value={address ? address : ""}
                        onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Continue
        </Button>
            </Form>
        </FormContainer>
    );
}

export default ShippingScreen;
