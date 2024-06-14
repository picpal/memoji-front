import React from "react";
import PopupBackground from "./PopupBackground";
import styles from "../styles/CreateSubjectPopup.module.css";
import icon from "../styles/icon.module.css";

const CreateSubjectPopup = (props) => {
  return (
    <PopupBackground>
      <div className={styles.popup}>
        <div className={styles.note_property_wrap}>
          <div className={styles.note_property}>
            <input type="text" placeholder="Subject 명칭을 적어주세요" />
            <div className={styles.spot_line}></div>

            <div className={styles.blank_line}></div>
          </div>
        </div>

        <div className={styles.popup_buttons}>
          <a>Cancel</a>
          <a>Create</a>
        </div>
      </div>
    </PopupBackground>
  );
};

export default CreateSubjectPopup;
