import React, { useEffect, useState } from "react";

const Flash_Sale = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/Flase_Sale_item.json");
        const data = await response.json();
        setItem(data);
      } catch {
        console.log("error");
      }
    };
    fetchData();
  }, []);
  console.log(item);

  return (
    <div className="w-[1200px] mx-auto py-10 bg-white px-1">
      <div>
        <h2 className="text-black text-lg font-medium pb-10">Flash Sale</h2>
      </div>
      <div className="flex justify-between text-red-500 py-4 border-b-2 border-gray-400">
        <h3 className="text-lg font-medium ">On Sale Now</h3>
        <a className="border-2 border-red-500 px-5 py-2 rounded-md" href="/">
          Shop All Products
        </a>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
  {item.map((singleItem, index) => (
    <div className="w-[200px] p-1 rounded-lg  flex flex-col items-center hover:shadow-lg transition-all duration-300 mt-1" key={index}>
      <img 
        src={singleItem.image} 
        alt={singleItem.title} 
        className="w-full h-[150px] object-cover rounded-md mb-4" 
      />
      <p className="font-semibold text-sm mb-2 text-center text-black">{singleItem.title}</p>
      <div className="flex justify-between w-full">
        <p className="text-xl font-bold text-red-500 line-through">{singleItem.price}৳</p>
        <p className="text-sm font-semibold text-gray-500 ">{singleItem.discount}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Flash_Sale;
