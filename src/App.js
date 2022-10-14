import "./App.css";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Login from "./pages/login";
import React, { useState } from "react";
import Dashboard from "./pages/home";
import Products from "./pages/products";
import Account from "./pages/account";
import AddProduct from "./pages/addProduct";
import PrivateRoute from "./components/privateRouter";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<PrivateRoute element={< Dashboard />} />} />
          <Route path="/products" element={<PrivateRoute element={< Products />} />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/addProduct" element={<PrivateRoute element={< AddProduct />} />} />
          <Route path="/account" element={<PrivateRoute element={< Account />} />} />
          <Route path="*" element={<Navigate to="/dashboard"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
