import CreateNotePopup from "../components/CreateNotePopup";
import NoteViewer from "../components/NoteViewer";

export default function Home() {
  const content = "# Markdown Content \nThis is a sample markdown content";

  return (
    <div>
      <NoteViewer content={content} />
    </div>
  );
}
