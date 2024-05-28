// components/Sidebar.js
import styles from "../styles/Sidebar.module.css";

const Sidebar = ({ notes }) => {
  return (
    <div className={styles.sidebar}>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.title}</span>
            <ul>
              {note.pages.map((page) => (
                <li key={page.id}>{page.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
