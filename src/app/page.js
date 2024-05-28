"use client";

import Sidebar from "../components/Sidebar";
import NoteViewer from "../components/NoteViewer";
import { useState } from "react";

const notes = [
  {
    id: 1,
    title: "First Note",
    pages: [
      { id: 1, title: "Page 1" },
      { id: 2, title: "Page 2" },
    ],
  },
  { id: 2, title: "Second Note", pages: [{ id: 3, title: "Page 1" }] },
];

export default function Home() {
  const [selectedNote, setSelectedNote] = useState(notes[0]);
  const [selectedPage, setSelectedPage] = useState(selectedNote.pages[0]);
  const content = "# Markdown Content \nThis is a sample markdown content";

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar notes={notes} />
      <NoteViewer content={content} />
    </div>
  );
}
