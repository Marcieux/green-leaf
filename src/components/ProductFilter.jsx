import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductFilter({ className, ...props }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [openTypes, setOpenTypes] = useState(false);

  const handleOpenTypes = () => {
    setOpenTypes(!openTypes);
  };

  useEffect(() => {
    axios
      .get("https://plantsapi.vercel.app/")
      .then((response) => {
        setProducts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const uniqueTypes = [...new Set(products.map((item) => item.type))];
    setProductsFiltered(uniqueTypes);
  }, [products]);

  return (
    <div className={`${className}`} {...props}>
      <h3
        className="text-lg md:text-xl lg:text-2xl font-medium text-[#1e1e1ebf] mb-2 cursor-pointer flex items-center justify-between gap-5"
        onClick={handleOpenTypes}
      >
        Types
        <i
          className={`fa-solid fa-caret-down transition-transform ${
            openTypes ? "rotate-180" : ""
          }`}
        ></i>
      </h3>

      <div
        className={`${
          openTypes ? "flex flex-col" : "hidden"
        } md:block relative`}
      >
        <div className="w-full mb-5 relative">
          <input
            className="h-10 w-full border border-[#1e1e1e80] rounded-lg px-4 pr-12 placeholder-gray-500 focus:outline-none focus:ring focus:ring-[#1e1e1e80]"
            type="text"
            id="search"
            placeholder="Search for specific plants"
          />
          <button
            className={`flex items-center justify-center absolute right-2 top-1/2 transform -translate-y-1/2 ${
              openTypes ? "" : "pointer-events-none"
            }`}
            type="submit"
          >
            <i className="fa-solid fa-magnifying-glass text-[#1f1f1f]"></i>
          </button>
        </div>

        <div className="flex flex-col">
          {productsFiltered.map((type) => (
            <div className="mb-4 flex items-center" key={type}>
              <label htmlFor={type} className="flex items-center">
                <input
                  type="checkbox"
                  name="type"
                  id={type}
                  className="mr-2 h-6 w-6 border border-[#1e1e1e80] rounded-md text-[#446969] focus:ring-[#598888] cursor-pointer"
                  title={`type ${type}`}
                />
                <span className="text-sm md:text-base lg:text-lg font-light text-[#1f1f1f]">
                  {type.toUpperCase()}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className={`mt-4 ${openTypes ? "mb-2" : "mb-0"}`}></div>
    </div>
  );
}
