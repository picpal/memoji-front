import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div>

      {/* Navigation Title */}
      <div>
        <h1>
          <input
            type="text"
            className={styles.border_0}
            defaultValue={"My Public Note"}
          />
        </h1>
      </div>
      
      {/* Notes */}
      <div className={styles.mt_6}>
        <h1 className={styles.note_title}>
          <input
            type="text"
            className={styles.border_0}
            defaultValue={"First Note"}
          />
        </h1>
        <div>
          <h2>Master Project Name</h2>
          <div>
            <h3>Sub Project Name</h3>
            <div>
              <h4>Sub Project Name</h4>
              {/* pages */}
              <ul>
                <li>Developer Write file_#01</li>
                <li>Developer Write file_#02</li>
              </ul>
            </div>  
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
