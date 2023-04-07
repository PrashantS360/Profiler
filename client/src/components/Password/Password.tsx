import styles from "./Password.module.scss";
import { useState } from "react";

export function Password() {
  const [modal, setModal] = useState(false);

  function handleChangeClick() {
    setModal(!modal);
    if (modal) {
      document.body.classList.remove("stop-scrolling");
    } else {
      document.body.classList.add("stop-scrolling");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.upper_row}>
        <h4>PASSWORD & SECURITY</h4>
        <button onClick={handleChangeClick}>Change</button>
      </div>

      <p>Password</p>
      <input className={styles.input} disabled value="* * * * * * * *" />
      <div className={styles.line} />
      {modal && <PasswordModal />}
    </div>
  );

  function PasswordModal() {
    return (
      <>
        <div
          onClick={handleChangeClick}
          className={styles.modal_background}
        ></div>
        <form className={styles.password_modal_form}>
          <p className={styles.title}>Current Password</p>
          <input
            placeholder="Current Password"
            className={styles.password_modal_input}
          />
          <p className={styles.title}>New Password</p>
          <input
            placeholder="New Password"
            className={styles.password_modal_input}
          />
          <p className={styles.title}>Confirm Password</p>
          <input
            placeholder="Confirm Password"
            className={styles.password_modal_input}
          />
          <div className={styles.bottom_row}>
            <button onClick={handleChangeClick} className={styles.btn}>
              Cancel
            </button>
            <button className={styles.btn}>Save</button>
          </div>
        </form>
      </>
    );
  }
}
