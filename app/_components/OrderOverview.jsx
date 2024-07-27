import { Icon } from ".";

export default function OrderOverview() {
    return (
      <div className="px-6 py-8 sm:rounded-xl sm:shadow-md space-y-6 bg-white text-secondary">
        <h2 className="text-xl">Overview</h2>

        <div className="flex flex-wrap gap-6">
          <div className="flex-1 bg-primary text-white p-6 rounded-lg border border-primary space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-extrabold">Order Requests</h3>
              <Icon.Info className="fill-current" />
            </div>
            <div className="mt-4 text-3xl font-extrabold">
              146<span className="text-sm font-semibold">/order</span>
            </div>
            <p className="text-sm">Total no. of request from Stores</p>
          </div>

          <div className="flex-1 p-6 rounded-lg border border-gray-300 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-extrabold">Order In Process</h3>
              <Icon.Info className="fill-gray-500" />
            </div>
            <div className="mt-4 text-3xl font-extrabold">
              198<span className="text-sm font-semibold">/order</span>
            </div>
            <p className="text-sm text-gray-400">
              No. of order are in ship and pack
            </p>
          </div>

          <div className="flex-1 p-6 rounded-lg border border-gray-300 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-extrabold">Order Delivered</h3>
              <Icon.Info className="fill-gray-500" />
            </div>
            <div className="mt-4 text-3xl font-extrabold">
              649<span className="text-sm font-semibold">/delivered</span>
            </div>
            <p className="text-sm text-gray-400">
              Total no. of order delivered
            </p>
          </div>
        </div>
      </div>
    );
}