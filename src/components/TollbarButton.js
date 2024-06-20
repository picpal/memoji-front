import React, { useEffect, useState } from "react";
import styles from "../styles/Write.module.css";

const TollbarButton = ({ tag }) => {
  const [style, setStyle] = useState("");

  const tagStyle = (tag) => {
    let result;
    switch (tag) {
      case "h1":
        result = `${styles.icon} ${styles.heading_1}`;
        break;
      case "h2":
        result = `${styles.icon} ${styles.heading_2}`;
        break;
      case "h3":
        result = `${styles.icon} ${styles.heading_3}`;
        break;
      case "h4":
        result = `${styles.icon} ${styles.heading_4}`;
        break;
      case "h5":
        result = `${styles.icon} ${styles.heading_5}`;
        break;
      case "bold":
        result = `${styles.icon} ${styles.bold}`;
        break;
      case "italic":
        result = `${styles.icon} ${styles.italic}`;
        break;
      case "remove":
        result = `${styles.icon} ${styles.remove}`;
        break;
      case "image":
        result = `${styles.icon} ${styles.image}`;
        break;
      case "code":
        result = `${styles.icon} ${styles.code}`;
        break;
    }

    return style;
  };

  useEffect(() => {
    setStyle(tagStyle(tag));
  });

  return (
    <button>
      <span data-tag={tag} className={style} />
    </button>
  );
};

export default TollbarButton;
