import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Banner_nav from "./Components/Banner_navbar/Banner_nav";
import Navbar from "./Components/Navbar/Navbar";
import Flash_Sale from "./Components/Flash_Sale/Flash_Sale";
import Categories from "./Components/Categories/Categories";
import Allproduct from "./Components/Allproduct/Allproduct";
import { Footer } from "./Components/Footer/Footer";
import CartProduct from "./Components/CartProduct/CartProduct";  // New component for cart page

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page with all components */}
        <Route path="/" element={
          <>
            <Banner_nav />
            <Navbar />
            <Banner />
            <Flash_Sale />
            <Categories />
            <Allproduct />
            <Footer />
          </>
        } />

        {/* Cart page */}
        <Route path="/cart-product" element={<CartProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
