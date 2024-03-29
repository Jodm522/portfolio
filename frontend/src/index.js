import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
