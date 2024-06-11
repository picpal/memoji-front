import React from "react";
import PopupBackground from "./PopupBackground";
import styles from "../styles/CreateNotePopup.module.css";

const CreateNotePopup = (props) => {
  return (
    <PopupBackground>
      <div className={styles.popup}>
        <div className={styles.note_property_wrap}>
          <div className={styles.note_property}>
            <input type="text" placeholder="Note 명칭을 적어주세요" />
            <div className={styles.spot_line}></div>
            <div>
              <p className={styles.sub_title}>Note 속성을 선택해 주세요</p>
              <div>
                <label htmlFor="">
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
          <div className={styles.parent_note_list}>
            <p>상위 노트를 선택해주세요</p>
            <ul>
              <li>
                <span>First Note</span>
              </li>
              <li>
                <span>Second Note</span>
                <ul>
                  <li>
                    <span>Favorite Note</span>
                    <ul>
                      <li>
                        <span>Title Lorem Ipsum Title Lorem Ipsum</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span>Third Note</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <button>Create</button>
          <button>Cancel</button>
        </div>
      </div>
    </PopupBackground>
  );
};

export default CreateNotePopup;
