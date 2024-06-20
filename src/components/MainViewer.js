import styles from "../styles/MainViewer.module.css";
import Preview from "./Preview";
import icon from "../styles/icon.module.css";

const NoteViewer = ({ content }) => {
  return (
    <div className={styles.main_viewer}>
      <article>
        <div className={styles.title}>
          <span className={styles.bookmark}>
            <span className={`${icon.icon32} ${icon.bookmark}`} />
          </span>
          <h1>Git & Github Setting Gui de Basic</h1>
        </div>

        <div className={styles.buttons}>
          <button>수정</button>
          <button>삭제</button>
        </div>

        <div className={styles.blank_line}></div>

        {/* write page의 viewer처럼 랜더링해서 출력필요 */}
        <Preview markdownText={content} />
      </article>
    </div>
  );
};

export default NoteViewer;
