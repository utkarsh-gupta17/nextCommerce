import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Head from "./head";
import { GlobalProvider } from "./GlobalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BuyItNow",
  description: "The Next ECommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <GlobalProvider>
        <body className={inter.className}>
          <Header/>
          {children}
        </body>
      </GlobalProvider>
    </html>
  );
}
