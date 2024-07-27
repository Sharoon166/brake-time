import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const inventoryData = [
  {
    id: 1,
    title: "Low Stock",
    description: "All stock items that are low in inventory",
    qty: 18,
    percentage: 0.01,
    icon: "/icons/low_stock.svg",
  },
  {
    id: 2,
    title: "Out of Stock",
    description: "All stock items that are out of stock",
    qty: 9,
    percentage: 0.01,
    icon: "/icons/out_of_stock.svg",
  },
  {
    id: 3,
    title: "Short Expire",
    description: "All stock items that are short expire",
    qty: 3,
    percentage: 0.01,
    icon: "/icons/expire.svg",
  },
];

export default function InventoryOverview({ vertical }) {
    return (
      <div className="px-6 py-8 sm:rounded-xl sm:shadow-md space-y-6 bg-white text-secondary">
        <h2 className="text-xl">Inventory Overview</h2>

        <div
          className={` mx-auto flex gap-4 flex-wrap ${
            vertical
              ? "flex-col justify-center w-max"
              : " flex-row w-full items-center justify-center md:justify-normal"
          }`}>
          {inventoryData.map((data) => {
            const { id, description, title, qty, percentage, icon } = data;
            return (
              <div
                key={id}
                className="border border-gray-200 rounded-xl p-4 flex sm:items-center gap-4">
                <div className="bg-primary p-2 size-12 flex justify-center items-center rounded-full">
                  <Image src={icon} width={50} height={50} alt={title} />
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                  <div>
                    <h2>{title}</h2>
                    <p className="text-xs text-gray-400 max-w-[20ch]">
                      {description}
                    </p>
                  </div>
                  <div className="space-y-3 md:space-y-6">
                    <div className="text-primary font-semibold">
                      {qty} items
                    </div>
                    <div className="flex items-center gap-1">
                      <FaArrowRight className="rotate-45 text-red-500" />{" "}
                      <span>{percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}
