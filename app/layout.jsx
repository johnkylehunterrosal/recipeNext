
"use client"
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { useEffect, useState } from 'react';

const metadata = {
  title: "Recipe",
  description: "Powered by Kyle",
};

export default function RootLayout({ children }) {
  const [headerText, setHeaderText] = useState("Recipe List");
  
  return (
    <html lang="en">
      <body className="flex h-full">
        <div className="flex flex-grow h-screen">
          <aside className="w-1/6 bg-gray-900 flex-shrink-0 p-5 text-white">
            <Sidebar setHeaderText={setHeaderText}/>
          </aside>
        <div className="flex flex-col w-full px-5 flex-grow">
          <header className="flex items-center h-28">
            <h1 className="text-7xl">
              {headerText}
            </h1>
          </header>
          <main className="flex-grow">
            {children }
          </main>
        </div>
        </div>
      </body>
    </html>
  );
}
