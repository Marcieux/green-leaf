import React from "react";
import artificialPlants from "../assets/artificial-plants.png";
import bonsai from "../assets/bonsai.png";
import cactus from "../assets/cactus.png";
import naturalPlants from "../assets/natural-plants.png";

const images = {
  artificialPlants,
  bonsai,
  cactus,
  naturalPlants,
};

export default function CategoryCard({ img, title }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[1.5rem]">
      <img
        className="rounded-full max-mobile:w-[130px] max-mobile:h-[130px]"
        src={images[img]}
        alt={title}
      />

      <p className="font-medium text-[1.2rem] text-[#1e1e1ebf]">{title}</p>

      <button className="bg-[#c1dcdc] text-sm rounded-xl py-[.625rem] px-[1rem] font-medium text-[#446969] hover:opacity-80 active:opacity-100 active:bg-[#598888] active:text-[#f5f5f5]">
        See More
      </button>
    </div>
  );
}
