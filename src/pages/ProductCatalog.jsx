import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "../components/CategoryCard";
import PlantDrawBanner from "../assets/PlantDrawBanner";
import banner from "../assets/banner-footer.png";
import Dropdown from "../components/Dropdown";
import ProductFilter from "../components/ProductFilter";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { img: "artificialPlants", title: "Artificial Plants" },
    { img: "bonsai", title: "Bonsai" },
    { img: "cactus", title: "Cactus" },
    { img: "naturalPlants", title: "Natural Plants" },
  ];

  const SortByType = {
    RELEVANCY: "Relevancy",
    HIGHEST_TO_LOWEST: "Highest to Lowest",
    LOWEST_TO_HIGHEST: "Lowest to Highest",
    MOST_RATED: "Most Rated",
    BESTSELLERS: "Bestsellers",
  };

  const options = Object.values(SortByType).map((type) => ({
    value: type,
    label: type,
  }));

  useEffect(() => {
    axios
      .get("https://plantsapi.vercel.app/")
      .then((response) => {
        setProducts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="flex flex-col gap-20 py-6 px-4 desktop:mx-20 tablet:mx-10 max-mobile:gap-10">
      {/* Banner Section */}
      <section className="flex h-full bg-custom-bg bg-center object-cover bg-cover pt-12 pr-12 pb-[7.8rem] pl-12 rounded-3xl overflow-hidden relative max-mobile:pb-5">
        <div className="flex flex-col opacity-80 gap-10 w-[45%] z-10 max-mobile:w-[70%] max-mobile:gap-5">
          <h1 className="text-[4rem] font-extrabold text-[#1e1e1e] leading-[4rem] max-tablet:text-[3rem] max-mobile:text-[2.5rem] max-mobile:leading-normal">
            Best Selling Plants
          </h1>
          <p>
            We offer many different types of products with fewer variations in
            each category.
          </p>
          <div className="relative h-16 mobile:w-[350px] ">
            <input
              className="outline-none bg-[#446969] placeholder:text-white text-white text-sm w-full h-full pr-[6rem] rounded-xl border-none p-[1.2rem] focus:outline-[#1e1e1e80] focus:outline-1 max-mobile:text-xs max-mobile:pr-[4rem]"
              type="text"
              placeholder="What are you looking for?"
            />
            <button
              className="flex items-center justify-center bg-[#598888] h-[48px] w-[48px] border rounded-xl absolute -right-[14px] top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              type="submit"
            >
              <i className="fa-solid fa-magnifying-glass text-white"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="">
        <div className="flex items-center justify-between gap-4 px-24 max-tablet:grid max-tablet:grid-cols-2 max-tablet:p-0">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              img={category.img}
              title={category.title}
            />
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="">
        <div className="px-6 tablet:px-12 desktop:px-24">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col tablet:flex-row gap-8">
              <ProductFilter className="max-mobile:hidden" />
              <div className="flex-1">
                <div className="flex items-center justify-between w-full">
                  <span className="font-medium text-base text-[#1f1f1f]">
                    Showed 30 items
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-base text-[#1f1f1f]">
                      Sort by
                    </span>
                    <Dropdown placeholder="Relevancy" options={options} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 tablet:grid-cols-3 desktop:grid-cols-4 mt-4">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      {...product}
                      sellingPrice={product.selling_price}
                      soldOut={product.sold_out === "true" ? "sold-out" : ""}
                      className={`border ${
                        product.sold_out === "true"
                          ? "border-[#dc716b]"
                          : "border-[#c1dcdc]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="mb-20">
        <div className="px-24 h-[612px] flex items-end relative max-mobile:px-12">
          <div className="text-[#1e1e1ebf] w-full h-[463px] flex flex-col gap-4 items-start bg-[#f5f5f5] rounded-[22px] py-[4rem] px-[1.5rem] tablet:py-[6rem] tablet:px-[3rem]">
            <h3 className="font-normal text-[2rem] leading-[50px] text-[#1e1e1ebf] tablet:text-[2.5rem] tablet:leading-[60px]">
              Transform
            </h3>
            <span className="desktop:w-full font-normal text-[1.2rem] leading-[30px] tablet:text-[1.5rem] tablet:leading-[36px] tablet:w-[50%]">
              any environment into a natural and cozy haven with plants.
            </span>
            <img
              src={banner}
              alt="banner_footer"
              className="absolute right-[-20px] bottom-0 rounded-[18px] z-[1] max-mobile:hidden max-tablet:hidden"
            />
            <PlantDrawBanner className="absolute left-0 h-[200px] w-[200px] bottom-[200px]" />
            <PlantDrawBanner className="absolute w-[390px] left-[610px] bottom-0 max-tablet:left-[410px] max-mobile:hidden" />
          </div>
        </div>
      </section>
    </div>
  );
}
