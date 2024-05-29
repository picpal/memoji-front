import styles from "./Sidebar.module.css";

const Sidebar = ({ notes }) => {
  return (
    <div>
      <div>
        <input type="text" className="memoji-title" value={"My Public Note"} />
      </div>
      <div className={styles.sidebar}>
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
