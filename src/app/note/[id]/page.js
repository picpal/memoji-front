// app/note/[id]/page.js
import NoteViewer from "../../../components/MainViewer";

const NotePage = ({ params }) => {
  const { id } = params;
  const content = `# Note ${id} Content \nThis is the content of note ${id}`;

  return (
    <div>
      <NoteViewer content={content} />
    </div>
  );
};

export default NotePage;
