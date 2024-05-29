import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          className={styles.border_0}
          defaultValue={"My Public Note"}
        />
      </div>
      <div>
        <h2>Notes</h2>
        <ul>
          <li>list1</li>
          <li>list2</li>
          <li>list3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
