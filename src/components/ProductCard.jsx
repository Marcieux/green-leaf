import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MiniCartContext } from "../contexts/MiniCartContext"; // Adjust the import path
import AddToCart from "./AddToCart"; // Adjust the import path if necessary

export default function ProductCard(props) {
  const { id, name, type, price, sellingPrice, img, soldOut } = props;
  const { toggleMiniCart } = useContext(MiniCartContext); // Get toggle function from context

  return (
    <section className="justify-self-center relative overflow-hidden">
      <Link className="cursor-pointer" to={`/products/${id}`} reloadDocument id={id}>
        {soldOut && (
          <div className="absolute top-5 right-[-36px] w-[150px] bg-[#446969] text-white text-xs font-semibold uppercase p-2 transform rotate-45 text-center">
            Sold out
          </div>
        )}

        <img
          src={img}
          alt={name}
          id={id}
          className="w-[280px] h-[280px] object-cover rounded-xl max-mobile:h-[185px]"
        />

        <div className="flex flex-col items-start gap-2 my-3 max-mobile:flex-col">
          <p className="text-[1rem] leading-7 font-semibold text-[#1e1e1ebf]">
            {name}
          </p>
          <span className="text-xm font-normal text-[#1e1e1ebf]">
            {type}
          </span>
        </div>

        <div className="flex flex-col items-start gap-1">
          {price && (
            <span className="text-sm font-medium line-through text-neutral-medium">
              ${price}
            </span>
          )}
          <span className="text-lg font-semibold text-[#1e1e1ebf]">
            ${sellingPrice}
          </span>
        </div>
      </Link>

      {/* Add to Cart button */}
      <AddToCart product={{ id, name, img, selling_price: sellingPrice }} />
    </section>
  );
}
