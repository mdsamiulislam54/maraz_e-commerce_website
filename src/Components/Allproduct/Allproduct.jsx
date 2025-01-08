import React, { useContext } from 'react'
import { ProductsContext } from '../Context/Context'
import { AiFillStar } from "react-icons/ai";

const Allproduct = () => {
    const {products} = useContext(ProductsContext)
  
  return (
    <div className="w-[1200px] mx-auto">
    <div>
        <h3 className="text-2xl font-bold py-4 text-black">Just For You</h3>
    </div>
    <div className="grid grid-cols-4 gap-6">
        {products.map((product, index) => (
            <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
                {/* Product Image */}
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-[120px] h-[120px] object-contain mb-4"
                />
                {/* Product Title */}
                <h1 className="text-lg font-semibold text-gray-800 text-center">
                    {product.title.length > 20
                        ? `${product.title.slice(0, 20)}...`
                        : product.title}
                </h1>
                {/* Product Price & Discount */}
                <div className="text-center py-2">
                    <span className="text-lg font-bold text-red-600">
                    ${product.price}
                    </span>
                    <span className="text-sm line-through text-gray-500 ml-2">
                        ${Math.round(product.price * 1.2)}
                    </span>
                </div>
                {/* Product Rating */}
                <div className="flex items-center">
                    <span className="text-yellow-500 font-bold text-sm">
                        {product.rating?.rate || 4.5}
                    </span>
                    <AiFillStar className="text-yellow-500 ml-1" size={16} />
                    <AiFillStar className="text-yellow-500 ml-1" size={16} />
                    <AiFillStar className="text-yellow-500 ml-1" size={16} />
                    <AiFillStar className="text-yellow-500 ml-1" size={16} />
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default Allproduct