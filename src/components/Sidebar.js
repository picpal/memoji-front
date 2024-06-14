import styles from "../styles/Sidebar.module.css";
import icon from "../styles/icon.module.css";

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
      <div className={styles.mt_1}>
        <h1 className={styles.subject}>
          <input
            type="text"
            className={styles.border_0}
            defaultValue={"First Note"}
          />
        </h1>
        <div className={styles.note_wrapper}>
          <h2 className={`${styles.note_title} ${styles.note_depth_01}`}>
            <span className={`${icon.icon} ${icon.note}`} />
            <span>Master Project Name</span>
          </h2>
          <div>
            <h3 className={`${styles.note_title} ${styles.note_depth_02}`}>
              <span className={`${icon.icon} ${icon.note}`} />
              <span>Sub Project Name</span>
            </h3>
            <ul>
              <li className={`${styles.page} ${styles.page_depth_02}`}>
                <span className={`${icon.icon} ${icon.page}`} />
                <span>page Name subject</span>
              </li>
              <li className={`${styles.page} ${styles.page_depth_02}`}>
                <span className={`${icon.icon} ${icon.page}`} />
                <span>page Name subject</span>
              </li>
            </ul>
            <div>
              <h4 className={`${styles.note_title} ${styles.note_depth_03}`}>
                <span className={`${icon.icon} ${icon.note}`} />
                <span>Sub Project Name</span>
              </h4>
              {/* pages */}
              <ul>
                <li className={`${styles.page} ${styles.page_depth_03}`}>
                  <span className={`${icon.icon} ${icon.page}`} />
                  <span>page Name subject</span>
                </li>
                <li className={`${styles.page} ${styles.page_depth_03}`}>
                  <span className={`${icon.icon} ${icon.page}`} />
                  <span>page Name subject</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
