import styles from "../../styles/Write.module.css";

const WritePage = () => {
  return (
  <div className={styles.write_wrapper}>
    <div className={styles.left_section}>
      <div className={styles.title}>
        <input placeholder="제목을 입력해주세요."/>
      </div>
      <div className={styles.tags}>
        <input placeholder="태그를 입력해주세요."/>
      </div>
      <div className={styles.toolbar}>
        <button>H1</button>
        <button>H2</button>
        <button>H3</button>
        <button>H4</button>
        <button>H5</button>
        <button>B</button>
        <button>I</button>
        <button>Q </button>
        <button>B</button>
        <button>I</button>
        <button>C</button>
      </div>
      <div className={styles.editor}>
        <textarea placeholder="내용을 입력해주세요."></textarea>
      </div>
      <div className={styles.left_footer}>
        <button>Exit</button>
        <button>Save</button>
      </div>
    </div>

    <div>
      hi
    </div>
  </div>
  );
};

export default WritePage;
