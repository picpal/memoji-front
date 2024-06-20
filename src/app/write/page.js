"use client";

import React, { useEffect, useRef, useState } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { markdown } from "@codemirror/lang-markdown";
import { syntaxHighlighting } from "@codemirror/language";
import { indentWithTab, history, undo, redo } from "@codemirror/commands";
import { editorTheme, customHighlightStyle } from "../../hooks/EditorStyles";
import { useFetchDocument } from "../../hooks/fetchDocument";
import "highlight.js/styles/github-dark.css";
import styles from "../../styles/Write.module.css";
import htmlViewer from "../../styles/HtmlViewer.module.css";
import Preview from "../../components/Preview";
import TollbarButton from "../../components/TollbarButton";

const WritePage = ({ docId }) => {
  const editorDiv = useRef(null);
  const [viewerTitle, setViewerTitle] = useState("");
  const { docContent, isLoading, error } = useFetchDocument(docId);
  const [content, setContent] = useState("");

  const updateViewerTitle = (e) => {
    setViewerTitle(e.target.value);
  };

  useEffect(() => {
    if (!editorDiv.current) return;

    const startState = EditorState.create({
      doc: docContent,
      extensions: [
        history(),
        keymap.of([
          indentWithTab,
          { key: "Mod-z", run: undo }, // 'Mod'는 Ctrl 또는 Cmd 키를 자동으로 매핑
          { key: "Mod-y", run: redo, mac: "Mod-Shift-z" }, // Mac에서는 'Cmd-Shift-Z'를 사용
        ]),
        markdown(),
        syntaxHighlighting(customHighlightStyle),
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            setContent(update.state.doc);
          }
        }),
        editorTheme,
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: editorDiv.current,
    });

    return () => {
      view.destroy();
    };
  }, [docContent]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading document: {error.message}</p>;

  return (
    <div className={styles.write_wrapper}>
      <div className={styles.left_section}>
        <div className={styles.title}>
          <input
            onChange={updateViewerTitle}
            placeholder="제목을 입력해주세요."
          />
        </div>
        <div className={styles.tags}>
          <input placeholder="태그를 입력해주세요." />
        </div>
        <div className={styles.toolbar}>
          <TollbarButton tag={"h1"} />
          <button>
            <span className={`${styles.icon} ${styles.heading_2}`} />
          </button>
          <button>
            <span className={`${styles.icon} ${styles.heading_3}`} />
          </button>
          <button>
            <span className={`${styles.icon} ${styles.heading_4}`} />
          </button>
          <button>
            <span className={`${styles.icon} ${styles.heading_5}`} />
          </button>
          <button>
            <span className={`${styles.icon} ${styles.bold}`} />
          </button>
          <button>
            <span className={`${styles.icon} ${styles.italic}`} />
          </button>
          <button>
            <span className={`${styles.icon} ${styles.remove}`} />
          </button>
          <button>
            <span className={`${styles.icon} ${styles.image}`} />
          </button>
          <button>
            <span className={`${styles.icon} ${styles.code}`} />
          </button>
        </div>
        <div className={styles.editor}>
          <div ref={editorDiv}></div>
        </div>
        <div className={styles.left_footer}>
          <button>Exit</button>
          <button>Save</button>
        </div>
      </div>

      <div className={htmlViewer.viewer_wrapper}>
        <div className={htmlViewer.viewer_title}>{viewerTitle}</div>
        <Preview markdownText={content} />
      </div>
    </div>
  );
};

export default WritePage;
