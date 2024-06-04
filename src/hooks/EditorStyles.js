import { EditorView } from "@codemirror/view";
import { HighlightStyle } from "@codemirror/language";
import { tags } from "@lezer/highlight";

// styles/EditorStyles.js
export const editorTheme = EditorView.theme({
  "&": {
    height: "100%",
    overflow: "auto",
    padding:"0"
  },
  ".cm-line": {
    padding: "0",
  },
  "&.cm-focused": {
    border: "none",
    outline:"none"
  },
  ".cm-scroller": {
    fontFamily: "Pretendard",
  },
});

export const customHighlightStyle = HighlightStyle.define([
  { tag: tags.heading1, fontSize: "2.0em", fontWeight: "bold" },
  { tag: tags.heading2, fontSize: "1.8em", fontWeight: "bold" },
  { tag: tags.heading3, fontSize: "1.6em", fontWeight: "bold" },
  { tag: tags.heading4, fontSize: "1.4em", fontWeight: "bold" },
  { tag: tags.heading5, fontSize: "1.4em", fontWeight: "bold" },
  { tag: tags.heading6, fontSize: "1.4em", fontWeight: "bold" },
]);
