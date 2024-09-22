import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { id, name, type, price, sellingPrice, img, soldOut, hasButton } = props;
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
          alt={img}
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
      {/* {hasButton && (
        <AddToCart id={id} />
      )} */}
    </section>
  );
}
