// components/Header.js
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.bredcrumb}>
        <li>
          <a>First Note</a>
        </li>
        <li>&#47;</li>
        <li>
          <a>Master Project Name</a>
        </li>
        <li>&#47;</li>
        <li>
          <a>Sub Project Name</a>
        </li>
        <li>&#47;</li>
        <li>
          <a>Developer write file</a>
        </li>
      </ul>

      <nav >
        <ul className={styles.menu}>
          <li>
            <a>Search</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
