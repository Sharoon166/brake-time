"use client";
import {
  useGetAllProductsQuery,
  useSearchProductsQuery,
} from "@/app/_redux/api/productsApi";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { Spinner } from "@nextui-org/react";
import { useState } from "react";

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const {
    data: searchResults = [],
    isLoading,
    isError,
    error,
  } = useSearchProductsQuery({ searchTerm });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
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
    <div className="relative">
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="border rounded-md p-2 mr-2 flex-grow"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowSearchResults(true)}
        />
      </div>
      <div
        className={`absolute top-full w-max min-w-full right-0 px-4 py-2 bg-white ${
          showSearchResults ? "grid" : "hidden"
        }`}>
        {searchResults.products.length == 0 && <p>No results found</p>}
        {searchResults.products.map((product) => (
          <Link
            key={product.id}
            href={`/testing/products/${product.id}`}
            className="overflow-hidden flex hover:bg-gray-200 rounded-lg">
            <div className="">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="size-20 object-cover"
              />
            </div>
            <div className="p-2">
              <p className="font-bold text-sm">{product.title}</p>
              <p className="text-xs text-zinc-700">$ {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function ProductsPage() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery();

  if (isLoading) {
    return (
      <div className="text-3xl flex justify-center items-center min-h-screen">
        Loading...
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
    <>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Products</h1>

            <ProductSearch />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-purple-500 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Product</th>
                  <th className="py-3 px-6 text-left">Category</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Rating</th>
                  <th className="py-3 px-6 text-left">Stock</th>
                  <th className="py-3 px-6 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/testing/products/${product.id}`}
                    className="contents">
                    <tr className="hover:bg-gray-100 transition-colors duration-200">
                      <td className="py-4 px-6 border-b border-gray-200">
                        <div className="flex items-center">
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-12 h-12 object-cover rounded-md mr-4"
                          />
                          <span>{product.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200">
                        {product.category}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200">
                        {product.rating}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200">
                        {product.stock}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200">
                        {product.availabilityStatus}
                      </td>
                    </tr>
                  </Link>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
