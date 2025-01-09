import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../Context/Context";

const CartProduct = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);

  // Find the product using the id
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-300">
        <h2 className="text-2xl font-bold text-red-500">Product not found!</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-300 p-6 rounded-lg shadow-md max-sm:w-full max-sm:p-4 flex justify-center  flex-col mx-auto">
    {/* Product Title */}
    <h1 className="text-xl font-bold text-red-600 mb-4">{product.title}</h1>
  
    {/* Product Image */}
    <img
      src={product.image}
      alt={product.title}
      className="w-[500px] h-[400px] max-sm:h-48 object-contain mb-6 rounded-lg bg-white"
    />
  
    {/* Product Details */}
    <div className="text-gray-800">
      <p className="mb-3">
        <span className="font-semibold">Price:</span> ${product.price}
      </p>
      <p className="mb-3">
        <span className="font-semibold">Category:</span> {product.category}
      </p>
      <p className="mb-3">
        <span className="font-semibold">Stock:</span> {product.stock}
      </p>
      <p className="mb-3">
        <span className="font-semibold">Discount:</span>{" "}
        {product.discountPercentage}%
      </p>
      <p className="mb-3">
        <span className="font-semibold">Brand:</span> {product.brand}
      </p>
      <p className="mb-3">
        <span className="font-semibold">Dimensions:</span>{" "}
        {product.dimensions
          ? `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`
          : "Not Available"}
      </p>
      <p className="mb-3">
        <span className="font-semibold">Warranty:</span>{" "}
        {product.warrantyInformation || "Not Available"}
      </p>
      <p className="mb-3">
        <span className="font-semibold">Shipping Info:</span>{" "}
        {product.shippingInformation || "Not Available"}
      </p>
    </div>
  
    {/* Reviews */}
    <div className="mt-6">
      <h2 className="text-lg font-bold text-gray-900 mb-3">Customer Reviews:</h2>
      <div className="space-y-4">
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-gray-700"
            >
              <p className="font-semibold">{review.reviewerName}</p>
              <p className="text-sm text-gray-600">{review.comment}</p>
              <p className="text-sm text-gray-500">
                Rating: {review.rating}/5 | {new Date(review.date).toDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  </div>
  
  );
};

export default CartProduct;
