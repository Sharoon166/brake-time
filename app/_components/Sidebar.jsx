"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const navLinks = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    icon: Icon.Dashboard,
  },
  {
    id: 2,
    name: "Inventory",
    href: "/inventory",
    icon: Icon.Inventory,
    subItems: [
      {
        id: 1,
        name: "Categories",
        href: "/inventory/categories",
        icon: Icon.Categories,
      },
    ],
  },
  {
    id: 3,
    name: "Order",
    href: "/order",
    icon: Icon.Order,
  },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const path = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <>
      <div
        className={`bg-white fixed inset-y-0 left-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out z-50 md:static md:z-0 text-grey`}>
        <div className="w-64 md:w-max h-full py-10 px-4 shadow-2xl lg md:shadow-none space-y-4 overflow-y-auto">
          <div>
            <Image
              src="/logo.svg"
              alt=""
              width={150}
              height={150}
              className="object-contain px-4 p-4 mb-6 z-50 border-b-1.5 border-gray-300/30"
            />
          </div>

          {navLinks.map((link) => {
            const { id, name, href, icon: IconComponent, subItems } = link;
            const isActive = path == href;

            return (
              <div key={id}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center gap-2 group ${
                    isActive && "text-primary shadow-lg shadow-gray-100/50"
                  } hover:text-primary rounded-lg px-2 py-2 z`}>
                  <IconComponent
                    className={`group-hover:stroke-primary ${
                      isActive ? "stroke-primary" : "stroke-grey"
                    }`}
                  />
                  <div>{name}</div>
                  {subItems && (
                    <div
                      className="h-full flex-1"
                      onClick={() => toggleDropdown(id)}>                      
                      <FaChevronDown
                        className={`ml-auto font-light align-middle ${openDropdown === id? "rotate-0" : "-rotate-90"} group-hover:text-primary ${
                          isActive ? "text-primary" : "text-grey"
                        } transition-all ease-soft-spring duration-250`}
                      />
                    </div>
                  )}
                </Link>
                {subItems && openDropdown === id && (
                  <div className="pl-4">
                    {subItems.map((subItem) => {
                      const { id, name, href, icon: IconComponent } = subItem;
                      const isActive = path == href;

                      return (
                        <Link
                          key={id}
                          href={href}
                          onClick={() => setIsOpen(false)}
                          className={`w-full flex items-center gap-2 group ${
                            isActive &&
                            "text-primary shadow-lg shadow-gray-100/50"
                          } hover:text-primary rounded-lg px-2 py-2 z`}>
                          <IconComponent
                            className={`group-hover:stroke-primary ${
                              isActive ? "stroke-primary" : "stroke-grey"
                            }`}
                          />
                          <div>{name}</div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
}
