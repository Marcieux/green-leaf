import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import ProductCatalog from "./pages/ProductCatalog";
import { MiniCartContextProvider } from "./contexts/MiniCartContext"; // Import the provider

function App() {
  return (
    <MiniCartContextProvider> {/* Wrap your app with the context provider */}
      <Router>
        <main className="min-h-screen max-w-[1440px] mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/" element={<ProductCatalog />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/contacts/" element={<Contacts />} />
          </Routes>
          <Newsletter />
        </main>
        <Footer />
      </Router>
    </MiniCartContextProvider>
  );
}

export default App;
