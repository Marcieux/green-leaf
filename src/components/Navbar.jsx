import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import MiniCart from "./MiniCart";
import { MiniCartContext } from "../contexts/MiniCartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMiniCartOpen, setMiniCartOpen] = useState(false);
  const { cartItems } = useContext(MiniCartContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMiniCart = () => setMiniCartOpen(!isMiniCartOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen || isMiniCartOpen ? "hidden" : "auto";
  }, [isOpen, isMiniCartOpen]);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`flex items-center justify-between p-8 mobile:p-6 transition-all duration-300 ${isSticky ? "sticky top-0 bg-white z-50 max-mobile:shadow-md" : ""}`}
    >
      {/* Burger Menu Button */}
      <button
        className={`space-y-1 mobile:hidden text-2xl z-40 transition-transform duration-500 ${isOpen ? "rotate-45" : "rotate-0"}`}
        onClick={toggleMenu}
      >
        <div className={`w-6 h-0.5 bg-[#598888] transition-all duration-300 ${isOpen ? "transform translate-y-1.5" : ""}`}></div>
        <div className={`w-6 h-0.5 bg-[#598888] transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></div>
        <div className={`w-6 h-0.5 bg-[#598888] transition-all duration-300 ${isOpen ? "transform -translate-y-1.5 -rotate-90" : ""}`}></div>
      </button>

      {/* Logo */}
      <NavLink
        to="/"
        className="lowercase font-light text-3xl whitespace-nowrap absolute mobile:relative left-1/2 mobile:left-0 mobile:transform-none transform -translate-x-1/2"
      >
        <span className="text-[#598888]">Green</span>Leaf
      </NavLink>

      {/* Navigation Links */}
      <div className="hidden mobile:flex space-x-10 text-base">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#598888] font-semibold border-b-[2px] border-[#598888]"
              : "text-[#446969] hover:text-[#598888] transition-colors duration-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="relative group text-[#446969] hover:text-[#598888] transition-colors duration-300"
        >
          Products
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#598888] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </NavLink>
        <NavLink
          to="/contacts"
          className="relative group text-[#446969] hover:text-[#598888] transition-colors duration-300"
        >
          Contacts
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#598888] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </NavLink>
      </div>

      {/* Login and Cart Buttons */}
      <div className="flex relative items-center gap-10 text-base">
        <button
          onClick={toggleMiniCart}
          className="relative transition-transform duration-300 hover:scale-125"
        >
          <i className="fa-brands fa-opencart text-xl text-[#598888]"></i>
          {cartItems.length > 0 && (
            <div className="absolute -top-1 left-[1rem] w-6 h-6 text-xs text-white rounded-full bg-[#446969] flex items-center justify-center">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </div>
          )}
        </button>
        <button className="transition-transform duration-300 hover:scale-125">
          <i className="fa-regular fa-user text-xl text-[#598888]"></i>
        </button>
      </div>

      {/* MiniCart Component */}
      <MiniCart isOpen={isMiniCartOpen} toggleMiniCart={toggleMiniCart} />

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-20 p-10 top-0 left-0 bg-white w-full h-screen mobile:hidden overflow-y-scroll shadow-md animate-slideRight transition-all duration-400">
          <h1 className="lowercase font-light text-3xl mt-10">
            <span className="text-[#598888]">Green</span>Leaf
          </h1>

          <div className="flex flex-col text-[#1E1E1E] font-light text-sm items-center space-y-4 py-7 px-4">
            <div className="flex flex-col items-start text-base border-b border-black w-full space-y-4 pb-8">
              <button className="w-full py-3 px-4 bg-[#F3F4F6] rounded-lg shadow hover:bg-[#E5E7EB] transition-colors duration-300 flex items-center justify-between">
                Account <i className="fa-regular fa-user"></i>
              </button>
              <button
                onClick={toggleMiniCart}
                className="w-full py-3 px-4 bg-[#F3F4F6] rounded-lg shadow hover:bg-[#E5E7EB] transition-colors duration-300 flex items-center justify-between"
              >
                My Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <NavLink
              onClick={toggleMenu}
              to="/"
              className="w-full py-3 px-4 bg-[#F3F4F6] rounded-lg shadow hover:bg-[#E5E7EB] transition-colors duration-300 flex items-center justify-between"
            >
              Home
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/products"
              className="w-full py-3 px-4 bg-[#F3F4F6] rounded-lg shadow hover:bg-[#E5E7EB] transition-colors duration-300 flex items-center justify-between"
            >
              Products
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/contacts"
              className="w-full py-3 px-4 bg-[#F3F4F6] rounded-lg shadow hover:bg-[#E5E7EB] transition-colors duration-300 flex items-center justify-between"
            >
              Contacts
            </NavLink>
          </div>
        </div>
      )}
    </section>
  );
}
