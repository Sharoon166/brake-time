"use client";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import CategoriesAccordian from "./CategoriesAccordian";

import { LuSearch } from "react-icons/lu";

const dummyCategories = [
  {
    id: 1,
    name: "Furniture",
    items: [
      {
        id: 1,
        name: "Home Office Desks",
      },
      {
        id: 2,
        name: "Phone Cases",
      },
      {
        id: 3,
        name: "Studio Headphones",
      },
    ],
  },
  {
    id: 2,
    name: "Electronics",
    items: [
      {
        id: 1,
        name: "Smartphones",
      },
      {
        id: 2,
        name: "Laptops",
      },
      {
        id: 3,
        name: "Tablets",
      },
    ],
  },
  {
    id: 3,
    name: "Clothing",
    items: [
      {
        id: 1,
        name: "T-Shirts",
      },
      {
        id: 2,
        name: "Jeans",
      },
      {
        id: 3,
        name: "Dresses",
      },
    ],
  },
  {
    id: 4,
    name: "Books",
    items: [
      {
        id: 1,
        name: "Fiction",
      },
      {
        id: 2,
        name: "Non-Fiction",
      },
      {
        id: 3,
        name: "Textbooks",
      },
    ],
  },
];
export const CategoriesSection = () => {
  const [categories, setCategories] = useState(dummyCategories);
  const [searchQuery, setSearchQuery] = useState("");

  // TODO: Fetch categories from API

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.items.some((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="px-6 py-8 min-h-80 sm:rounded-xl sm:shadow-md space-y-10 bg-white">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-xl min-w-max">All Categories</h2>
        <Input
          type="text"
          variant="bordered"
          placeholder="Search Category"
          className="w-full max-w-sm"
          endContent={<LuSearch />}
          isClearable
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <CategoriesAccordian categories={filteredCategories} />
    </div>
  );
};
