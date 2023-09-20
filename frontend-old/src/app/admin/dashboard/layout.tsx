import "../../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Newsletters Project",
  description: "A directory of newsletters.",
};

const sideBarElements = [
  "Dashboard",
  "Newsletter",
  "Subscribers",
  "Settings",
  "Logout",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <div className="w-1/6">
            <ul
              className="
              flex flex-col
              justify-center
              items-center
              h-screen
              bg-blue-100
              text-gray-700
              font-bold
              text-sm
              border-r-2
              border-gray-700
            "
            >
              {sideBarElements.map((element, index) => (
                <li
                  key={index}
                  className="text-gray-700 text-sm font-bold mb-2 border-b-2 border-gray-700"
                >
                  {element}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-5/6 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
