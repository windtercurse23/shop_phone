import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./bootstrap.min.css";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary ";
import store from "./store";

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.querySelector("#root")
);
