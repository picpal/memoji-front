"use client";

import React, { useEffect, useRef, useState } from "react";
import { setupMarked } from "../hooks/setupMarked";
import htmlViewer from "../styles/HtmlViewer.module.css";
import "highlight.js/styles/github-dark.css";
import mermaid from "mermaid";

const Preview = ({ markdownText }) => {
  const [preview, setPreview] = useState("");

  const marked = setupMarked();

  const errorHandler = (err) => {
    console.error(err); // 콘솔에 에러 로그 출력
    // 여기서 커스텀 에러 메시지를 DOM에 추가하거나 상태로 관리할 수 있습니다.
    const errorContainer = document.querySelector("#mermaid-error-container");
    if (errorContainer) {
      errorContainer.innerHTML =
        "죄송합니다, 다이어그램을 렌더링하는 동안 문제가 발생했습니다.";
    }
  };

  useEffect(() => {
    setPreview(marked(markdownText.toString()));

    mermaid.initialize({
      startOnLoad: true,
      securityLevel: "loose",
      theme: "default",
      errorHandler,
    });
    mermaid.contentLoaded();
  });

  return (
    <div
      className={htmlViewer.viewer}
      dangerouslySetInnerHTML={{ __html: preview }}
    ></div>
  );
};

export default Preview;
