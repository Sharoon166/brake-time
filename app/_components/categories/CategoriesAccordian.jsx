"use client";

import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaPenToSquare } from "react-icons/fa6";
import { LuTrash2 } from "react-icons/lu";

export default function CategoriesAccordian({ categories }) {
  return (
    <>
      <Accordion className="space-y-2" showDivider={false}>
        {categories.map((category) => (
          <AccordionItem
            key={category.id}
            aria-label="Furniture"
            title={category.name}
            className="border px-4 rounded-lg"
            classNames={{
              title: "font-medium",
              trigger: "focus:border-none focus:outline-none focus:ring-none focus:shadow-none"
            }}>
            <div className="space-y-4">
              {category?.items?.map((item) => (
                <div
                  key={item.id}
                  className="pl-8 px-4 flex items-center justify-between gap-4">
                  <div>{item.name}</div>
                  <div className="flex items-center gap-2 justify-center text-gray-300">
                    <Link
                      href="/inventory/update"
                      className="p-2 rounded-full group bg-green-100 hover:bg-green-400  transition-colors duration-300">
                      <FaPenToSquare className="text-green-500 group-hover:text-white" />
                    </Link>
                    <div
                      className={`p-2 rounded-full group bg-red-100 hover:bg-red-400 transition-colors duration-300`}>
                      <LuTrash2 className="text-red-500 group-hover:text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
      {categories?.length == 0 && (
        <div className="text-grey">No Search Results</div>
      )}
    </>
  );
}
