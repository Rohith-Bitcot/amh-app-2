import type { Metadata } from "next";
import { Familjen_Grotesk, Inter } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import "./globals.css";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AMH Demand - Real Estate Analytics",
  description: "Executive dashboard for real estate analytics and funnel management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${familjenGrotesk.variable} ${inter.variable} antialiased`}>
        <Sidebar />
        <Header />
        <main className="lg:ml-60 mt-14 h-[calc(100vh-56px)] overflow-y-auto content-scrollbar bg-slate-50">
          <div className="p-3 sm:p-4 lg:p-5">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
