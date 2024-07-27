import { Input } from "@nextui-org/react";
import { FaBars, FaBell } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { FaInfoCircle } from "react-icons/fa";
import { Icon } from ".";

const notifications = [
  {
    id: 1,
    message: "New fund added to your watchlist",
    time: "2 hours ago"
  },
  {
    id: 2,
    message: "Market update: S&P 500 reaches new high",
    time: "5 hours ago"
  },
  {
    id: 3,
    message: "Dividend payment received for AAPL",
    time: "1 day ago"
  }
]  

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="p-4 bg-white flex items-center z-20 gap-4">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="md:hidden text-primary text-2xl"
          onClick={() => setIsOpen(!isOpen)}>
          {!isOpen && <FaBars />}
        </button>
      </div>
      
      <div className="w-full flex items-center justify-between gap-4 pr-10">
        <div className="w-full max-w-xs sm:max-w-sm">
          <Input
          placeholder="Search for News and Funds"
            variant="bordered"
            isClearable
            startContent={<LuSearch />}
            
          />
        </div>
        <div className="hidden sm:flex justify-center gap-4">
          <Dropdown>
            <DropdownTrigger>
              <div className="p-4 rounded-full cursor-pointer bg-primary/10" aria-label="notifications">
                <Icon.Bell className="stroke-primary"/>
              </div>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Dropdown Variants"
              color="primary"
              variant="flat" emptyContent="No notifications" className="divide-y-2" items={notifications}>
              {((notification) => (
                <DropdownItem startContent={<FaInfoCircle className="text-blue-500"/>}
                  key={notification.id}
                  className="h-14 gap-2 text-secondary">
                  <p className="font-semibold">{notification.message}</p>
                  <p className="text-xs text-right">{notification.time}</p>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                }}
                className="transition-transform"
                name="Rayford Chenail"
                description="rayfordchenail@mail.com"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Logged in as</p>
                <p className="font-bold">@tonyreichert</p>
              </DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

    </nav>
  );
}
