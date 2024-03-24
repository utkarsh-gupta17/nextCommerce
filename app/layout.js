import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Head from "./head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BuyItNow",
  description: "The Next ECommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
