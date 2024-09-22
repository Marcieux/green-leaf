import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { BackButton } from '../components/BackButton';
import AddToCart from '../components/AddToCart';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://plantsapi.vercel.app/`);
        const foundProduct = response.data.data.find((item) => item.id === id);
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("An error occurred while fetching the product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="py-10">
      <div className="space-y-10 max-w-6xl mx-auto px-6">
        <BackButton />
        <div className="flex gap-16 flex-col mobile:flex-row">
          <img
            src={product?.img}
            alt={`${product?.name}`}
            className="w-full mx-auto rounded-xl max-mobile:w-1/2 max-tablet:w-1/2 h-auto object-cover max-h-[430px]"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-base mobile:text-md font-normal text-[#1e1e1ebf]">{product?.type}</span>
              <h2 className="text-xl mobile:text-2xl font-normal text-[#1f1f1f]">{product?.name}</h2>
              <span className="text-sm mobile:text-base font-medium text-[#1e1e1e80] line-through">${product?.price}</span>
              <span className="text-lg mobile:text-xl font-medium text-[#1e1e1ebf]">${product?.selling_price}</span>
            </div>
            <div className="mt-6 mobile:mt-10">
              <span className="block text-lg max-mobile:text-base font-medium text-[#1e1e1ebf]">Description</span>
              <span className="block font-normal mt-1 text-base max-mobile:text-sm max-tablet:text-sm text-[#1e1e1e80]">{product?.description}</span>
            </div>
            <AddToCart id={product?.id} product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}
