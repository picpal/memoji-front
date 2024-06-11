import React from "react";
import styles from "../styles/PopupBackground.module.css";

const PopupBackground = ({ children }) => {
  return <div className={styles.popupBackground}>{children}</div>;
};

export default PopupBackground;
