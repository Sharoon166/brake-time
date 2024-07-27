"use client"
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";
import {
  FaBackwardFast,
  FaBackwardStep,
  FaForwardStep,
  FaForwardFast,
  FaPenToSquare,
  FaGear,
} from "react-icons/fa6";
import { LuSearch, LuTrash2 } from "react-icons/lu";

import { InventoryOverview, Label } from "@/app/_components";
import { inventoryData } from "@/app/_constants";



export default function Inventory() {
  return (
    <div className="sm:space-y-6">
      <InventoryOverview />
      <div className="px-6 py-8 sm:rounded-xl space-y-6 bg-white text-secondary">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-xl">All Inventory</h2>
          <div className="flex items-center flex-wrap gap-2 text-sm">
            <Input
              placeholder="Order-ID / Name"
              isClearable
              justify="end"
              startContent={<LuSearch />}
              variant="bordered"
              className="w-full max-w-48"
            />

            <Button color="primary" variant="bordered" className="font-semibold">Import CSV</Button>
            <Link
              href="/inventory/add"
              className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white transition-colors">
              {" "}
              Add Inventory
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto overflow-y-visible">
          <table className="table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Date</th>
                <th>Product name</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Units</th>
                <th>Threshold</th>
                <th>Expiry Date</th>
                <th className="grid place-content-center">
                  <FaGear />
                </th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((order, index) => {
                const {
                  id,
                  PDID,
                  ImportDate,
                  ProductName,
                  Quantity,
                  Status,
                  Units,
                  Threshold,
                  ExpiryDate,
                } = order;

                const variant =
                  Status == "In Stock"
                    ? "success"
                    : Status == "Low Stock"
                    ? "warning"
                    : Status == "Out of Stock"
                    ? "danger"
                    : "default";
                const canBeUpdated =
                  Status == "In Stock" || Status == "Low Stock";
                return (
                  <tr key={id} className="relative cursor-pointer">
                    <td>{PDID}</td>
                    <td>{ImportDate}</td>
                    <td className="relative cursor-pointer">{ProductName}</td>

                    <td>{Quantity}</td>
                    <td>
                      <Label message={Status} variant={variant} />
                    </td>
                    <td>{Units}</td>
                    <td>{Threshold}</td>
                    <td>{ExpiryDate}</td>
                    <td className="flex items-center gap-2 justify-center text-gray-300">
                      <Link
                        href="/inventory/update"
                        className={`p-2 rounded-full group ${
                          canBeUpdated && "bg-green-100 hover:bg-green-400 "
                        } transition-colors duration-300`}>
                        <FaPenToSquare
                          className={`${
                            canBeUpdated &&
                            "text-green-500 group-hover:text-white"
                          }`}
                        />
                      </Link>
                      <div
                        className={`p-2 rounded-full group ${
                          canBeUpdated && "bg-red-100 hover:bg-red-400"
                        } transition-colors duration-300`}>
                        <LuTrash2
                          className={`${
                            canBeUpdated &&
                            "text-red-500 group-hover:text-white"
                          }`}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="9">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="text-gray-400">Records: </span> 1 - 07 of
                      80
                    </div>
                    <div className="flex items-center gap-2">
                      <button>
                        <FaBackwardFast className="hover:text-zinc-700 cursor-pointer" />
                      </button>
                      <button>
                        <FaBackwardStep className="hover:text-zinc-700 cursor-pointer" />
                      </button>
                      <span>Page: </span>
                      <select className="py-1 px-2 border focus:outline-none">
                        <option defaultValue value="1">
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <button>
                        <FaForwardStep className="hover:text-zinc-700 cursor-pointer" />
                      </button>
                      <button>
                        <FaForwardFast className="hover:text-zinc-700 cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
