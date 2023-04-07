import { useState, useEffect } from "react";
import styles from "./ThemeButton.module.scss";

export function ThemeButton() {
  return (
    <label className={styles.switch}>
      <input type="checkbox" />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
}
