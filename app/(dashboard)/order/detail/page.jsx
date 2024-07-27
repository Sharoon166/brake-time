"use client";
import { Icon } from "@/app/_components";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import {
  FaCircleCheck,
} from "react-icons/fa6";

const ProductCard = ({ price }) => {
  const [qty, setQty] = useState(10);
  return (
    <div className="flex items-center justify-between gap-8 p-4 rounded-md">
      <img
        src="https://placehold.co/80x80"
        alt="Item Image"
        className="w-20 h-20 rounded-md object-cover"
      />
      <div className="flex-1 flex flex-col items-center flex-wrap justify-between gap-4 lg:flex-row">
        <div className="flex-1 min-w-[18ch] lg:max-w-[20ch] space-y-4">
          <h3 className="font-medium">Study Table, Office Desk</h3>
          <p className="text-xs text-gray-500">
            Figma ipsum component variant main layer. Please move flows library
            strikethrough prototype.
          </p>
        </div>
        <div className="p-2 border border-gray-300 rounded-xl bg-[#f3f3f3] flex items-center text-sm">
          <Button
            onClick={() => setQty(qty > 0 ? qty - 1 : qty)}
            variant="bordered"
            isIconOnly
            size="sm"
            className="bg-white border-none text-primary text-xl">
            -
          </Button>
          <input
            type="text"
            min={0}
            value={qty}
            className="w-12 text-center  rounded-md bg-transparent"
          />
          <Button
            onClick={() => setQty(qty + 1)}
            variant="bordered"
            isIconOnly
            size="sm"
            className="bg-white border-none text-primary text-xl">
            +
          </Button>
        </div>
        <p className="w-32 font-semibold text-primary">Rs.{qty * price}</p>
      </div>
    </div>
  );
};

export default function OrderDetails() {
  return (
    <>
      <div className="flex flex-col lg:flex-row sm:gap-8 ">
        <div className="w-full lg:w-2/3 bg-white p-8 sm:rounded-xl sm:shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Ordered Items</h2>
          <div className="space-y-6">
            {[1000, 200, 2000, 500].map((price) => (
              <ProductCard key={price} price={price} />
            ))}
          </div>
          <div className="mt-6 p-4 flex flex-col xl:flex-row justify-between gap-10 border-t relative">
            <div className="text-gray-500 text-sm mb-2 max-w-sm flex gap-4">
              <div className="text-2xl min-w-max text-gray-900">Order Note</div>{" "}
              <div>
                Figma ipsum component variant main layer. Ellipse move flows
                library strikethrough prototype.
              </div>
            </div>
            <div className="flex-1 flex flex-col text-sm text-gray-500 ">
              <div className="flex justify-between gap-4 p-3 ">
                <p>Subtotal</p>
                <p>Rs.2000</p>
              </div>
              <div className="flex justify-between gap-4 p-3 ">
                <p>Shipping</p>
                <p>Rs.230</p>
              </div>
              <div className="flex justify-between gap-4 p-3">
                <p>Tax</p>
                <p>Rs.10.00</p>
              </div>
              <hr  className="absolute top-[83%] xl:top-[75%] left-0 w-full" />
              <div className="flex justify-between text-lg mt-2 font-semibold text-gray-900">
                <p>Total</p>
                <p>Rs.250000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 bg-white p-6 sm:rounded-xl sm:shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Order Details</h2>
          <div className="space-y-6 py-10">
            <div className="flex flex-col gap-10 justify-center items-center">
              <section>
                <ul className="mx-auto grid max-w-md grid-cols-1 gap-14">
                  <li className="relative flex items-center gap-3">
                    <div className="flex">
                      <span
                        className="absolute left-[18px] -bottom-[60%] h-1/2 border-r-2 border-dashed "
                        aria-hidden="true"
                      />
                      <div className="inline-flex flex-col gap-3 shrink-0 items-center justify-center rounded-xl">
                        <Icon.OrderPacked className="size-10 fill-primary" />
                        <FaCircleCheck className="size-6 text-primary" />
                      </div>
                    </div>
                    <div className="">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Order Packed
                      </h3>
                      <h4 className="mt-2 text-gray-600 text-sm">
                        32 Manchester Ave, Ringgold, CA 30736
                      </h4>
                      <div className="text-xs text-primary font-semibold">
                        14:40 PM
                      </div>
                    </div>
                  </li>
                  <li className="relative flex items-center gap-3">
                    <div className="flex">
                      <span
                        className="absolute left-[18px] -bottom-[60%] h-1/2 border-r-2 border-dashed "
                        aria-hidden="true"
                      />
                      <div className="inline-flex flex-col gap-4 shrink-0 items-center justify-center rounded-xl">
                        <Icon.OrderPicked className="size-10 fill-primary" />
                        <FaCircleCheck className="size-6 text-primary" />
                      </div>
                    </div>
                    <div className="">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Order Picked
                      </h3>
                      <h4 className="mt-2 text-gray-600 text-sm">
                        32 Manchester Ave, Ringgold, CA 30736
                      </h4>
                      <div className="text-xs text-primary font-semibold">
                        14:40 PM
                      </div>
                    </div>
                  </li>
                  <li className="relative flex items-center gap-3">
                    <span
                      className="absolute left-[18px] -bottom-[60%] h-1/2 border-r-2 border-dashed "
                      aria-hidden="true"
                    />
                    <div className="inline-flex flex-col gap-4 shrink-0 items-center justify-center rounded-xl text-gray-400">
                      <Icon.OrderPackedOpen className="size-10 fill-current" />
                      <FaCircleCheck className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Order Packed
                      </h3>
                      <h4 className="mt-2 text-gray-600 text-sm">
                        32 Manchester Ave, Ringgold, CA 30736
                      </h4>
                      <div className="text-xs text-primary font-semibold">
                        14:40 PM
                      </div>
                    </div>
                  </li>
                  <li className="relative flex items-center gap-3">
                    <div className="inline-flex flex-col  gap-3 shrink-0 items-center justify-center rounded-xl text-gray-400">
                      <Icon.OrderShipped className="size-10 fill-current" />
                      <FaCircleCheck className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Shipped
                      </h3>
                      <h4 className="mt-2 text-gray-600 text-sm">
                        32 Manchester Ave, Ringgold, CA 30736
                      </h4>
                      <div className="text-xs text-primary font-semibold">
                        14:40 PM
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-6 font-semibold">
        <Button color="primary" variant="faded" className="font-semibold">
          Update
        </Button>
        <Button color="primary" className="font-semibold">
          Accept
        </Button>
      </div>
    </>
  );
}
