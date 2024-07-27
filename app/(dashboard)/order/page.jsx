"use client"
import Link from "next/link";
import { Button, DateRangePicker, Input, Select, SelectItem } from "@nextui-org/react";

import { LuSearch } from "react-icons/lu";
import {
  FaBackwardFast,
  FaBackwardStep,
  FaForwardFast,
  FaForwardStep,
  FaGear,
} from "react-icons/fa6";

import {OrderOverview, OrderRejectionForm, Label} from "@/app/_components"

import { orderData } from "@/app/_constants";



export default function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 overflow-y-auto">
      <div className="w-full rounded-xl flex flex-col sm:gap-6">
        <OrderOverview />

        <div className="px-6 py-8 sm:rounded-xl sm:shadow-md space-y-6 bg-white text-secondary">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-xl">Order Overview</h2>
            <div className="flex items-center flex-wrap gap-2 text-sm">
              <Select
                variant="bordered"
                placeholder="By Store name"
                className="w-full flex-1">
                <SelectItem key="by_store_name">By Store Name</SelectItem>
              </Select>

              <div className="flex items-center flex-wrap gap-2 md:contents">
                <div
                  id="date-picker-label"
                  className="min-w-max text-xs font-semibold">
                  Compare to
                </div>
                <DateRangePicker
                  aria-labelledby="date-picker-label"
                  variant="bordered"
                  className="flex-1 sm:w-min font-sans text-xs min-w-min md:min-w-max "
                />
                <Button color="primary" className="text-xs">
                  Export CSV
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Input
              placeholder="Order-ID / Name"
              isClearable
              justify="end"
              startContent={<LuSearch />}
              variant="bordered"
              className="w-full max-w-48"
            />
          </div>

          <div className="overflow-x-auto overflow-y-visible">
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Store</th>
                  <th>Region</th>
                  <th>Status</th>
                  <th className="grid place-content-center">
                    <FaGear />
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((order) => {
                  const { id, OrderID, Date, Store, Region, Status } = order;

                  const variant =
                    Status == "In Stock"
                      ? "primary"
                      : Status == "Out of Stock"
                      ? "danger"
                      : Status == "Low Stock"
                      ? "warning"
                      : "default";
                  const isOutOfStock = Status == "Out of Stock";
                  return (
                    <tr key={id} className="relative cursor-pointer">
                      <Link href={`/order/detail`} className="contents">
                        <td>{OrderID}</td>
                        <td>{Date}</td>
                        <td className="relative cursor-pointer">{Store}</td>
                        <td>{Region}</td>
                        <td>
                          <Label message={Status} variant={variant} />
                        </td>
                      </Link>
                      <td className="flex items-center gap-2 justify-center text-gray-300">
                        <button
                          disabled={isOutOfStock}
                          className="px-3 py-2 border border-current disabled:text-white disabled:bg-gray-300 text-white bg-primary rounded-lg">
                          Accept
                        </button>
                        <OrderRejectionForm disabled={isOutOfStock} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="6">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="text-gray-400">Records: </span> 1 - 07
                        of 80
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
    </div>
  );
}
