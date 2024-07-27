"use client"
import { useState } from "react";
import { Navbar, Sidebar } from "@/app/_components";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div className="xl:w-[15%] max-w-sm">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="w-3/4 xl:w-[85%] flex-1 flex flex-col">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="sm:p-10 bg-[#f6f6f6] flex-1 rounded-tl-xl overflow-y-auto max-h-[calc(100vh-90px)]" style={{
          boxShadow: "inset 25px 25px 20px #f1f1f1",
        }}>
          {children}
        </main>
      </div>
    </div>
  );
}
