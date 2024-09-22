import React, { useContext } from "react";
import { MiniCartContext } from "../contexts/MiniCartContext"; // Adjust the import path

export default function AddToCart({ product }) { 
  const { handleAddToCart, toggleMinicart } = useContext(MiniCartContext);

  const addToCart = () => {
    handleAddToCart(product);
    toggleMinicart(); // Optionally toggle minicart visibility
  };

  return (
    <button 
      onClick={addToCart}
      className="w-full mt-4 bg-[#446969] text-white py-2 px-4 rounded transition hover:opacity-80 active:bg-[#244545]" 
    >
      <i className="fa-brands fa-opencart"></i> Add to Cart
    </button>
  );
}
