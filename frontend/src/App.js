import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from './components/UserForm';
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
