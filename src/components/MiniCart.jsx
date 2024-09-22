import React, { useContext } from "react"; 
import { MiniCartContext } from "../contexts/MiniCartContext"; // Adjust the import path
import { NavLink } from "react-router-dom"; // Import NavLink for navigation

export default function MiniCart({ isOpen, toggleMiniCart }) {
  const { cartItems, handleAddToCart, handleRemoveFromCart, calculate } =
    useContext(MiniCartContext);

  const { subtotal, total, shippingFee } = calculate(cartItems); // Calculate subtotal, total, and shipping

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
          onClick={toggleMiniCart}
        ></div>
      )}

      {/* MiniCart */}
      <div
        className={`fixed top-0 right-0 h-full w-96 z-[100] bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* MiniCart Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">My Cart</h2>
          <button onClick={toggleMiniCart} className="text-2xl">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* MiniCart Items */}
        <div className="p-5 overflow-auto h-[65vh] flex flex-col gap-10">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <i className="fa-brands fa-opencart text-5xl text-[#446969] mb-4"></i>
              <p className="text-center text-gray-500 text-sm mb-1">Sorry, you have no products here.</p>
              <p className="text-center text-gray-500 text-sm mb-4">Please come back and explore to add products to your shopping cart.</p>
              <NavLink to="/products" onClick={toggleMiniCart} className="w-1/2 bg-[#446969] text-white py-2 rounded hover:opacity-80 active:bg-[#244545] font-semibold text-base text-center">
                Buy Now 
              </NavLink>
            </div>
          ) : (
            cartItems.map((item) => (
              
              <div
                key={item.id}
                className="flex gap-6 justify-between items-center py-2 border-b last:border-b-0"
              >
                {/* Item Details */}
                <div className="flex flex-col flex-grow pr-4">
                  <img
                    className="w-[100px] h-[100px] rounded-lg object-cover"
                    src={item.img}
                    alt={item.name}
                  />
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-sm">${item.selling_price}</span>
                  <span className="text-sm">
                    Total: ${(item.selling_price * item.quantity).toFixed(2)}
                  </span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 px-2 py-1 border border-[#446969] rounded-md">
                  <button
                    onClick={() => handleRemoveFromCart(item.id, true)}
                    className="text-[#446969] px-2"
                  >
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="text-[#446969] px-2"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 ml-2 text-2xl"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {/* MiniCart Summary */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>${shippingFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-[#446969] text-white py-2 rounded mt-4 hover:opacity-80 active:bg-[#244545]">
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}
