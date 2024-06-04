"use client";

import React, { useEffect, useRef, useState } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView , keymap} from '@codemirror/view';
import { markdown } from '@codemirror/lang-markdown';
import { syntaxHighlighting } from '@codemirror/language';
import { indentWithTab,history, undo, redo  } from "@codemirror/commands";
import { editorTheme, customHighlightStyle } from '../../hooks/EditorStyles';
import { setupMarked } from '../../hooks/setupMarked';
import { useFetchDocument } from '../../hooks/fetchDocument';
import 'highlight.js/styles/github-dark.css';
import styles from "../../styles/Write.module.css";
import mermaid from "mermaid";

const WritePage = ({docId}) => {
  const editorDiv = useRef(null);
  const previewDiv = useRef(null);
  const { docContent, isLoading, error } = useFetchDocument(docId);
  const [preview, setPreview] = useState('');
  const marked = setupMarked();


  const updatePreview = (doc) => {
    setPreview(marked(doc.toString()));
  };

  const errorHandler = (err) => {
    console.error(err); // 콘솔에 에러 로그 출력
    // 여기서 커스텀 에러 메시지를 DOM에 추가하거나 상태로 관리할 수 있습니다.
    const errorContainer = document.querySelector('#mermaid-error-container');
    if (errorContainer) {
      errorContainer.innerHTML = "죄송합니다, 다이어그램을 렌더링하는 동안 문제가 발생했습니다.";
    }
  }

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      securityLevel: 'loose',
      theme: "default",
      errorHandler,
    });
    mermaid.contentLoaded();
  })

  useEffect(() => {
    if(!editorDiv.current) return;

    const startState = EditorState.create({
      doc: docContent,
      extensions: [
        history(),
        keymap.of([
          indentWithTab, 
          { key: 'Mod-z', run: undo },  // 'Mod'는 Ctrl 또는 Cmd 키를 자동으로 매핑
          { key: 'Mod-y', run: redo, mac: 'Mod-Shift-z' }  // Mac에서는 'Cmd-Shift-Z'를 사용
        ]),
        markdown(),
        syntaxHighlighting(customHighlightStyle),
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            updatePreview(update.state.doc);
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
          <input placeholder="제목을 입력해주세요."/>
        </div>
        <div className={styles.tags}>
          <input placeholder="태그를 입력해주세요."/>
        </div>
        <div className={styles.toolbar}>
          <button>H1</button>
          <button>H2</button>
          <button>H3</button>
          <button>H4</button>
          <button>H5</button>
          <button>B</button>
          <button>I</button>
          <button>Q </button>
          <button>B</button>
          <button>I</button>
          <button>C</button>
        </div>
        <div className={styles.editor}>
          <div ref={editorDiv}></div>
        </div>
        <div className={styles.left_footer}>
          <button>Exit</button>
          <button>Save</button>
        </div>
      </div>

      <div className={styles.right_section} ref={previewDiv} dangerouslySetInnerHTML={{ __html: preview }}></div>
    </div>
  );
};

export default WritePage;
