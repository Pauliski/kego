import React from "react";
import { fetchProduct } from "../../lib/data";
import Image from "next/image";
import "./products.css";
import Like from "../icons/Like";

const Products = async () => {
  const allProducts = await fetchProduct();
  {
    console.log(allProducts);
  }
  return (
    <div className="products-container">
      {allProducts.map((product, index) => (
        <div className="relative">
          <div className="absolute bg-white rounded-md p-2 top-2 right-2">
            <Like />
          </div>
          <img
            key={index}
            src={product.href}
            alt="produt"
            className="rounded-md w-full h-44 "
          />
          <div className="mt-4">
            <p className="text-colorOne font-extrabold">{product.category}</p>
            <p className="text-colorTwo">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
