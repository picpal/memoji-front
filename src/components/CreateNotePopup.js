import React from "react";
import PopupBackground from "./PopupBackground";
import styles from "../styles/CreateNotePopup.module.css";
import icon from "../styles/icon.module.css";

const CreateNotePopup = (props) => {
  return (
    <PopupBackground>
      <div className={styles.popup}>
        <div className={styles.note_property_wrap}>
          <div className={styles.note_property}>
            <input type="text" placeholder="Note 명칭을 적어주세요" />
            <div className={styles.spot_line}></div>
            <div>
              <p className={styles.sub_title}>Folder를 선택해주세요</p>
              <div className={styles.note_property_selector}>
                <select>
                  <option value="A">First Note</option>
                </select>
              </div>
            </div>
            <div>
              <p className={styles.sub_title}>Note 속성을 선택해 주세요</p>
              <div className={styles.note_property_selector}>
                <label>
                  <input type="radio" name="note_option" />
                  <span>Master Note</span>
                </label>
                <label>
                  <input type="radio" name="note_option" />
                  <span>Sub Note</span>
                </label>
              </div>
            </div>
          </div>
          <div className={styles.parent_notes}>
            <p>상위 노트를 선택해주세요</p>
            <ul className={styles.note_list}>
              <li>
                <span className={`${icon.icon} ${icon.note}`} />
                <span>First Note</span>
              </li>
              <li className={styles.note_depth_02}>
                <span className={`${icon.icon} ${icon.note}`} />
                <span>Favorite Note</span>
              </li>
              <li className={styles.note_depth_03}>
                <span className={`${icon.icon} ${icon.note}`} />
                <span>Title Lorem Ipsum Title Lorem Ipsum</span>
              </li>
              <li className={styles.note_depth_03}>
                <span className={`${icon.icon} ${icon.note}`} />
                <span>Second Note</span>
              </li>
              <li>
                <span className={`${icon.icon} ${icon.note}`} />
                <span>Third Note</span>
              </li>
              <li>
                <span className={`${icon.icon} ${icon.note}`} />
                <span>Third Note</span>
              </li>
            </ul>
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

export default CreateNotePopup;
