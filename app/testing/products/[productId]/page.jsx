"use client";

import {
  useGetProductByIdQuery,
  useSearchProductsQuery,
} from "@/app/_redux/api/productsApi";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";


export default function ProductPage({ params }) {
  const { productId } = params;
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetProductByIdQuery(productId);

  const { data } = useSearchProductsQuery({ searchTerm: "phone" });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-3xl flex flex-col justify-center items-center min-h-screen">
        <div>Something went wrong</div>
        {error.message}
      </div>
    );
  }

  return (
      <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/testing/products"
          className="flex items-center mb-6 text-purple-500 hover:text-purple-700">
          <FaArrowLeft className="mr-2" />
          Back to Products
        </Link>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:w-1/2 p-6 flex justify-center items-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="size-52 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.title}
              </h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="mb-4">
                <span className="font-bold text-gray-800">Category:</span>{" "}
                <span className="text-gray-600">{product.category}</span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-800">Price:</span>{" "}
                <span className="text-gray-600">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-800">Rating:</span>{" "}
                <span className="text-gray-600">{product.rating}</span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-800">Stock:</span>{" "}
                <span className="text-gray-600">{product.stock}</span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-800">Availability:</span>{" "}
                <span className="text-gray-600">
                  {product.availabilityStatus}
                </span>
              </div>
              <div className="flex items-center">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                  <FaShoppingCart className="inline-block mr-2" />
                  Add to Cart
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
