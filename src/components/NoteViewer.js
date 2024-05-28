// components/NoteViewer.js
import styles from "../styles/NoteViewer.module.css";

const NoteViewer = ({ content }) => {
  return (
    <div className={styles.viewer}>
      <div>{content}</div>
    </div>
  );
};

export default NoteViewer;
