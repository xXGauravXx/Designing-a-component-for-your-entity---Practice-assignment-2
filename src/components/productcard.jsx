// components/cart/productcard.jsx
import React from "react";
import ViewProductButton from "./button";

const Productcard = () => {
  const productImage = "https://via.placeholder.com/150"; // Dummy image URL
  const productName = "Awesome Gadget";
  const productPrice = "₹999.00";

  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 w-64 text-center">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-600 font-bold">{productPrice}</p>
      <div className="mt-3">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;
