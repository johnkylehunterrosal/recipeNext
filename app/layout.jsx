
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
export const metadata = {
  title: "Recipe",
  description: "Powered by Kyle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-full">
        <div class="flex flex-grow h-screen">
          <aside class="w-1/6 bg-gray-900 flex-shrink-0 p-5 text-white">
            <Sidebar/>
          </aside>
        <div class="flex flex-col w-full px-5 flex-grow">
          <header class="flex items-center h-28 border-2 border-blue-500">
            <h1>
              Recipe Lists
            </h1>
          </header>
          <main class="border-2 border-gray-500 flex-grow">
            {children}
          </main>
        </div>
        </div>
      </body>
    </html>
  );
}
