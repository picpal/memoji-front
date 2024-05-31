"use client";

import { usePathname } from "next/navigation";
import "../styles/reset.css";
import "../styles/globals.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isWritePage = pathname === "/write";

  return (
    <html lang="ko"> 
      <body>
        <div>
          {!isWritePage && (
            <div className="wrapper">
              <div className="left-section">
                <Sidebar />
              </div>
              <div className="right-section">
                <Header />
                <div>{children}</div>
              </div>
            </div>
          )}
          {isWritePage && <div>{children}</div>}
        </div>
      </body>
    </html>
  );
}
