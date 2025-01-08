import React, { useContext } from "react";
import { ProductsContext } from "../Context/Context";

const Categories = () => {
  const { products } = useContext(ProductsContext);
  const sliceProduct = products.slice(0, 12)

  return (
    <div className="w-[1200px] mx-auto py-5 text-black">
      <h1 className="font-medium text-xl text-black py-4">Categories</h1>
      <div className="flex flex-wrap gap-0.5 items-center">
        {sliceProduct.map((product, index) => {
          return (
            <div key={index} className="w-[190px] h-[190px] bg-white flex justify-center items-center flex-col
            hover:shadow-lg transition-all duration-300
            ">
              <img
              className="w-[100px] h-[100px] pb-4"
              src={product.image} alt="" />
              <h1 className="text-md font-Roboto font-medium px-3">{product.category}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
