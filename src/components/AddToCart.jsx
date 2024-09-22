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
      className="w-full justify-self-center space-x-2 text-base font-light h-10 mt-4 bg-[#446969] text-white px-4 rounded-md max-tablet:text-sm transition hover:opacity-80 active:bg-[#244545]" 
    >
      <i className="fa-brands fa-opencart"></i> <span>Add to Cart</span>
    </button>
  );
}
