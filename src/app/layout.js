"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import "../styles/reset.css";
import "../styles/globals.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CreateNotePopup from "../components/CreateNotePopup";
import CreatePagePopup from "../components/CreatePagePopup";
import CreateSubjectPopup from "../components/CreateSubjectPopup";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isWritePage = pathname === "/write";

  const [popup, setPopup] = useState({
    createNotePopup: false,
    createPagePopup: false,
    createSubjectPopup: false,
  });

  return (
    <html lang="ko">
      <body>
        <div>
          {popup.createNotePopup && <CreateNotePopup />}
          {popup.createPagePopup && <CreatePagePopup />}
          {popup.createSubjectPopup && <CreateSubjectPopup />}
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
