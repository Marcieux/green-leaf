import React, { useEffect, useState } from "react";
import BgHero from "../assets/BgHero";
import Search from "../components/Search";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { person } from "../faker";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://plantsapi.vercel.app/")
      .then((response) => {
        console.log("Fetched data:", response.data);
        setProducts(response.data.data); // Accessing the array from the data key
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading/>;
  if (error) return <Error error={error}/>;

  return (
    <div className="flex flex-col gap-28 py-6 px-4 desktop:mx-20 tablet:mx-10 max-mobile:gap-16">
      <section className="flex h-full bg-[#C1DCDC] pt-12 pr-12 pb-[7.8rem] pl-12 rounded-3xl overflow-hidden relative max-mobile:pb-5">
        <div className="flex flex-col gap-10 w-[45%] z-10 max-mobile:w-[70%] max-mobile:gap-5">
          <h1 className="text-[4rem] font-extrabold text-[#1e1e1e] leading-[4rem] max-tablet:text-[3rem] max-mobile:text-[2.5rem] max-mobile:leading-normal">
            Buy your dream plants
          </h1>
          <div className="flex flex-row items-center max-mobile:text-base max">
            <div className="flex flex-col gap-2 border-r border-r-black pr-12 mr-12 max-mobile:pr-[1rem] max-mobile:mr-[1rem]">
              <p className="text-[2rem] font-medium">50+</p>
              <p>Plant Species</p>
            </div>

            <div className="flex flex-col  gap-2 ">
              <p className="text-[2rem] font-medium">100+</p>
              <p>Customers</p>
            </div>
          </div>
          <Search />
        </div>

        <div className="absolute right-0 bottom-0 h-max max-mobile:hidden max-tablet:w-[80%] max-tablet:-right-5">
          {/* SVG Background */}
          <BgHero />
        </div>
      </section>

      <section>
        <div className="flex gap-[3.75rem] max-tablet:flex-col max-mobile:gap-4">
          <div className="flex flex-col gap-6 w-[256px] max-tablet:w-full max-tablet:items-center max-mobile:gap-3">
            <h2 className="leading-[48px] text-[2rem] font-bold">
              Best Selling Plants
            </h2>
            <p className="text-[#1e1e1e80] text-base inline-block">
              Easiest way to healthy life by buying your favorite plants
            </p>

            <Link
              to="/products"
              className="bg-[#C1DCDC] text-[#446969] max-w-[160px] h-[50px] py-3 px-6 flex items-center justify-center gap-[10px] border-none rounded-[12px] font-medium text-[1rem] hover:opacity-80 active:bg-[#598888] active:text-[#f5f5f5] active:opacity-100 max-mobile:scale-[.8]"
            >
              See more<i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="w-full flex items-center justify-between gap-10 max-mobile:w-auto">
            {products.length > 0
              ? products.slice(0, 3).map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    type={product.type}
                    price={product.price}
                    sellingPrice={product.selling_price}
                    img={product.img}
                    // soldOut={product.sold_out}
                  />
                ))
              : !loading && !error && <p>No products available.</p>}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex flex-col items-center">
          <h3 className="text-[2rem] font-bold mb-3">About us</h3>
          <p className="text-base text-[#1e1e1e80]">
            Order now and appreciate the beauty of nature
          </p>

          <div className="w-full flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex flex-col items-center w-80">
              <span className="w-24 h-24 flex items-center justify-center bg-[#C1DCDC]  rounded-full">
                <i className="fa-solid fa-leaf text-5xl text-[#446969]"></i>
              </span>
              <h4 className="font-bold text-xl mt-6 mb-3">Large Asssortment</h4>
              <p className="text-center text-base text-[#1e1e1e80] max-mobile:text-sm">
                We offer many different types of products with fewer variations
                in each category.
              </p>
            </div>

            <div className="flex flex-col items-center w-80">
              <span className="w-24 h-24 flex items-center justify-center bg-[#C1DCDC] rounded-full">
                <i className="fa-solid fa-box text-5xl text-[#446969]"></i>
              </span>
              <h4 className="font-bold text-xl mt-6 mb-3">
                Fast & Free Shipping
              </h4>
              <p className="text-center text-base text-[#1e1e1e80] max-mobile:text-sm">
                4-day or less delivery time, free shipping, and an expedited
                delivery option.
              </p>
            </div>

            <div className="flex flex-col items-center w-80">
              <span className="w-24 h-24 flex items-center justify-center bg-[#C1DCDC]  rounded-full">
                <i className="fa-solid fa-headset text-5xl text-[#446969]"></i>
              </span>
              <h4 className="font-bold text-xl mt-6 mb-3">24/7 Support</h4>
              <p className="text-center text-base text-[#1e1e1e80] max-mobile:text-sm">
                Answers to any business-related inquiry 24/7 and in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-16 sm:mb-12">
          <h4 className="text-[2rem] font-bold">Categories</h4>
          <span className="text-base text-[#1e1e1e80] max-mobile:text-sm">
            Find what you are looking for
          </span>
        </div>

        <div>
          <div className="w-full bg-[#c1dcdc] relative py-12 px-6">
            <div className="flex flex-row gap-10 justify-between relative max-mobile:gap-0">
              {/* First Category Card */}
              <div className="flex flex-col items-center w-full relative top-[15%] transform -translate-y-[15%]">
                <img
                  src="https://images.unsplash.com/photo-1526565782131-a13074f0dbbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Natural Plants"
                  className="object-cover h-[512px] w-[352px] max-tablet:w-[250px] max-tablet:h-[300px] max-mobile:w-[150px] max-mobile:h-[200px] rounded-lg"
                />
                <span className="mt-4 text-lg font-bold text-center max-tablet:text-base max-mobile:text-sm">
                  Natural Plants
                </span>
              </div>

              {/* Second Category Card */}
              <div className="flex flex-col items-center w-full relative">
                <img
                  src="https://images.unsplash.com/photo-1508502726440-477c94bc369e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Plants Accessories"
                  className="object-cover h-[512px] w-[352px] max-tablet:w-[250px] max-tablet:h-[300px] max-mobile:w-[150px] max-mobile:h-[200px] rounded-lg"
                />
                <span className="mt-4 text-lg font-bold text-center max-tablet:text-base max-mobile:text-sm">
                  Plants Accessories
                </span>
                <div className="flex flex-col items-center mt-4">
                  <span className="text-center text-sm text-[#1e1e1e80] mb-4">
                    Horem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                  <Link
                    to="/products"
                    className="w-[140px] h-[40px] bg-white rounded-lg font-medium text-lg flex items-center gap-2.5 hover:opacity-80 active:bg-[#1E1E1E] active:text-white"
                  >
                    <div className="flex flex-row space-x-4 items-center mx-auto">
                      <span className="text-sm">Explore</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Third Category Card */}
              <div className="flex flex-col items-center w-full relative top-[15%] transform -translate-y-[15%]">
                <img
                  src="https://images.unsplash.com/photo-1569350080887-dd38c27caad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                  alt="Artificial Plants"
                  className="object-cover h-[512px] w-[352px] max-tablet:w-[250px] max-tablet:h-[300px] max-mobile:w-[150px] max-mobile:h-[200px] rounded-lg"
                />
                <span className="mt-4 text-lg font-bold text-center max-tablet:text-base max-mobile:text-sm">
                  Artificial Plants
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-20 max-mobile:py-4 max-w-full">
          <h4 className="w-2/5 mb-12 font-bold text-3xl max-mobile:w-full max-mobile:mb-8 max-mobile:text-center max-mobile:text-base">
            What customers say about{" "}
            <span className="text-[#00df9a]">green</span>
            <span>leaf</span> ?
          </h4>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={48}
            breakpoints={{
              1025: {
                slidesPerView: "auto",
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 24,
              },
            }}
          >
            {person.map((item) => (
              <SwiperSlide
                className="max-w-[800px] h-[330px] bg-[#c1dcdc] rounded-[12px] p-12 max-mobile:w-full max-mobile:h-full max-mobile:p-6 tablet:w-[610px] tablet:p-10"
                key={item.id}
              >
                <p className="font-medium text-base leading-[27px] text-[#1e1e1ebf] mb-[3.4rem] max-mobile:text-xs max-mobile:leading-normal max-mobile:mb-6 tablet:text-sm tablet:mb-12">
                  {item.review}
                </p>
                <div className="flex relative">
                  <i className="fa-solid fa-quote-left absolute -top-4 z-[-1] w-[45px]" />
                  <img
                    src={item.img}
                    alt=""
                    className="rounded-full w-[128px] h-[128px] -left-[40px] max-mobile:w-[65px] max-mobile:h-[65px] max-mobile:mr-2"
                  />
                  <span className="font-bold text-base flex flex-col">
                    {item.name}
                    <span className="font-medium text-sm text-[rgba(30,30,30,0.5)]">
                      {item.jobTitle}
                    </span>
                  </span>
                  <span className="font-bold text-base flex items-center justify-end flex-1 gap-3">
                    <i className="fa-solid fa-star" />
                    4.5
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
