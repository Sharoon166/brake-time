"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/app/_redux/slices/counterSlice";
const Page = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center gap-10 min-h-screen">
      <div className="text-xl">{counter}</div>
          <div className="flex gap-6">
              <button className="px-5 py-3 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white" onClick={() => dispatch(increment())}>INCREMENT</button>
              <button className="px-5 py-3 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white" onClick={() => dispatch(decrement())}>DECREMENT</button>
          </div>
    </div>
  );
};

export default Page;
