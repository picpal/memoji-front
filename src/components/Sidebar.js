import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div>
      {/* Navigation Title */}
      <div>
        <h1 className={styles.subject}>
          <input
            type="text"
            className={styles.border_0}
            defaultValue={"My Public Note"}
          />
        </h1>
      </div>

      {/* Notes */}
      <div className={styles.mt_6}>
        <h1 className={styles.subject}>
          <input
            type="text"
            className={styles.border_0}
            defaultValue={"First Note"}
          />
        </h1>
        <div className={styles.note_wrapper}>
          <h2 className={`${styles.note_title} ${styles.note_depth_01}`}>Master Project Name</h2>
          <div>
            <h3 className={`${styles.note_title} ${styles.note_depth_02}`}>Sub Project Name</h3>
            <ul>
              <li className={`${styles.page_depth_02}`}>Developer Write file_#01</li>
              <li className={`${styles.page_depth_02}`}>Developer Write file_#02</li>
            </ul>
            <div>
              <h4 className={`${styles.note_title} ${styles.note_depth_03}`}>Sub Project Name</h4>
              {/* pages */}
              <ul>
                <li className={`${styles.page_depth_03}`}>Developer Write file_#01</li>
                <li className={`${styles.page_depth_03}`}>Developer Write file_#02</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
