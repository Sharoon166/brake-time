"use client";
import { useState } from "react";
import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  Button,
  DateRangePicker,
} from "@nextui-org/react";
import {
  Label,
  OrderOverview,
  InventoryOverview,
  TicketOverview,
} from "@/app/_components";

import { LuSearch, LuTrash2 } from "react-icons/lu";
import {
  FaBackwardFast,
  FaBackwardStep,
  FaForwardFast,
  FaForwardStep,
  FaGear,
  FaPenToSquare,
} from "react-icons/fa6";

import { orderDataDashboard } from "@/app/_constants";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col lg:flex-row sm:gap-8">
      <div className="w-full sm:rounded-xl flex flex-col sm:gap-6">
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
                {orderDataDashboard.map((order, index) => {
                  const {
                    id,
                    OrderID,
                    Date,
                    Store,
                    Region,
                    Status,
                    ContactNo,
                    Email,
                  } = order;

                  const variant =
                    Status == "Packed"
                      ? "primary"
                      : Status == "New Order"
                      ? "success"
                      : Status == "Order Pending"
                      ? "warning"
                      : "default";
                  const isNewOrder = Status == "New Order";
                  return (
                    <tr key={id} className="relative cursor-pointer">
                      <Link
                        key={id}
                        href={`/order/detail`}
                        className="contents">
                        <td>{OrderID}</td>
                        <td>{Date}</td>
                      </Link>
                      <td className="relative cursor-pointer group">
                        <Popover
                          shouldBlockScroll
                          shouldUpdatePosition
                          showArrow
                          backdrop="opaque"
                          motionProps={{
                            variants: {
                              enter: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                  y: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                  },
                                  opacity: { duration: 0.2 },
                                },
                              },
                              exit: {
                                y: 10,
                                opacity: 0,
                                transition: {
                                  y: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                  },
                                  opacity: { duration: 0.15 },
                                },
                              },
                            },
                            initial: { y: 20, opacity: 0 },
                          }}>
                          <PopoverTrigger>
                            <span>{Store}</span>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2">
                              <div className="text-sm text-gray-400">
                                Contact no:
                              </div>
                              <div className="text-primary">{ContactNo}</div>
                              <div className="text-sm text-gray-400 mt-2">
                                Email:
                              </div>
                              <div className="font-bold">{Email}</div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </td>
                      <Link
                        key={id}
                        href={`/order/detail`}
                        className="contents">
                        <td>{Region}</td>
                        <td>
                          <Label message={Status} variant={variant} />
                        </td>
                      </Link>
                      <td className="flex items-center gap-2 justify-center text-gray-300">
                        <button
                          className={`p-2 rounded-full group ${
                            isNewOrder && "bg-green-100 hover:bg-green-400"
                          } transition-colors duration-300`}>
                          <FaPenToSquare
                            className={`${
                              isNewOrder &&
                              "text-green-500 group-hover:text-white"
                            }`}
                          />
                        </button>
                        <button
                          className={`p-2 rounded-full group ${
                            isNewOrder && "bg-red-100 hover:bg-red-400"
                          } transition-colors duration-300`}>
                          <LuTrash2
                            className={`${
                              isNewOrder &&
                              "text-red-500 group-hover:text-white"
                            }`}
                          />
                        </button>
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
      <div className="flex flex-col sm:gap-6">
        <InventoryOverview vertical />
        <TicketOverview />
      </div>
    </div>
  );
}
