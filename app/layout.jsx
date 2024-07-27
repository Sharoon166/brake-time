import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import UIProvider from "@/app/_components/UIProvider";
import StoreProvider from "@/app/_redux/StoreProvider";

const redHat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata = {
  title: "BrakeTime | Dashboard",
  description: "Your One-Stop Shop for Effortless Fleet Management",
  icons: {
    icon: "/logo_sm.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="light">
      <body
        className={`${redHat.className} text-secondary font-medium bg-white`}>
        <StoreProvider>
          <UIProvider>{children}</UIProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
