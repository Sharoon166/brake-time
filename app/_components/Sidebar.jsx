"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaX } from "react-icons/fa6";
import Icon from "./Icon";

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
            const { id, name, href, icon: IconComponent } = link;
            const isActive = path == href;

            return (
              <Link
                key={id}
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
                {name == "Order" && (
                  <Image
                    height={15}
                    width={15}
                    src="/icons/caret_down.svg"
                    alt={`${name} icon`}
                    className="ml-auto max-md:hidden"
                  />
                )}
              </Link>
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
