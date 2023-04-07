import styles from "./User.module.scss";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

export function User() {
  const [modal, setModal] = useState(false);
  const BLANK_URL = "/logo.png";

  function handleEditClick() {
    setModal(!modal);
    if (modal) {
      document.body.classList.remove("stop-scrolling");
    } else {
      document.body.classList.add("stop-scrolling");
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.userimg_container}>
          <img src={BLANK_URL} className={styles.userimg} />
          <button onClick={handleEditClick} className={styles.edit_btn}>
            <MdEdit className={styles.edit_icon} size={12} />
          </button>
        </div>
        <div className={styles.userinfo_container}>
          <p>Hello,</p>
          <h2>Cipher Schools</h2>
          <p>cipherschools@email.com</p>
        </div>
      </div>
      {modal && <EditProfileModal />}
    </>
  );

  function EditProfileModal() {
    const [img, setImg] = useState<ImgState>({
      preview: BLANK_URL,
      file: null,
    });

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
      const imgFile = e.target.files![0];
      if (!imgFile) return;
      const preiewUrl = URL.createObjectURL(imgFile);
      setImg({ preview: preiewUrl, file: imgFile });
    }

    return (
      <>
        <div
          onClick={handleEditClick}
          className={styles.modal_background}
        ></div>
        <form className={styles.modal_form}>
          <h4>Profile Update</h4>
          <div className={styles.content}>
            <div className={`${styles.userimg_container}`}>
              <img src={img.preview} className={styles.userimg_big} />
              <input
                type="file"
                name="file"
                accept="image/png, image/jpg, image/jpeg"
                id="file-input"
                onChange={handleImageChange}
                className={styles.file_input}
              />
              <label
                htmlFor="file-input"
                className={`${styles.edit_btn} ${styles.edit_btn_big}`}
              >
                <MdEdit className={styles.edit_icon} size={17} />
              </label>
            </div>
            <ul className={styles.input_container}>
              <li>
                <p>First Name</p>
                <input placeholder="First Name" />
              </li>
              <li>
                <p>Last Name</p>
                <input placeholder="Last Name" />
              </li>
              <li>
                <p>Email Address</p>
                <input placeholder="Email Address" />
              </li>
              <li>
                <p>Mobile Number</p>
                <input placeholder="Mobile Number" />
              </li>
            </ul>
          </div>
          <div className={styles.btm_row}>
            <button onClick={handleEditClick}>Cancel</button>
            <button>Save</button>
          </div>
        </form>
      </>
    );
  }
}

interface ImgState {
  file: File | null;
  preview: string;
}
