import React from "react";
import ProductScreen from "./srcreens/ProductScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./srcreens/HomeSceen";
import CartScreen from "./srcreens/CartScreen";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginScreen from "./srcreens/LoginScreen";
import RegisterScreen from "./srcreens/RegisterScreen";
import ProfileScreen from "./srcreens/ProfileScreen";
import ShippingScreen from "./srcreens/ShippingScreen";
import PaymentScreen from "./srcreens/PaymentScreen";
import PlaceOrderScreen from "./srcreens/PlaceOrderScreen";
import OrderScreen from "./srcreens/OrderScreen";
import UserListScreen from "./srcreens/UserListScreen";
import UserEditScreen from "./srcreens/UserEditScreen";
import ProductListScreen from "./srcreens/ProductListScreen";
import ProductEditScreen from "./srcreens/ProductEditScreen";
import OrderListScreen from "./srcreens/OrderListScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/search/:keyword" exact component={HomeScreen} />
          <Route path="/page/:pageNumber" component={HomeScreen} />
          <Route
            path="/search/:keyword/page/:pageNumber"
            exact
            component={HomeScreen}
          />
          <Route path="/order/:id" component={OrderScreen} />

          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />

          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/userList" component={UserListScreen} />

          <Route path="/admin/orderList" component={OrderListScreen} />
          <Route
            path="/admin/productlist"
            exact
            component={ProductListScreen}
          />
          <Route
            path="/admin/productlist/:pageNumber"
            exact
            component={ProductListScreen}
          />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
