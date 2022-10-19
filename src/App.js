import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
