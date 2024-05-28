// components/Header.js
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Blog</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
