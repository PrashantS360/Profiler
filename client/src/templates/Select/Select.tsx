import styles from "./Select.module.scss";

export function Select({ options, title, disabled }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>

      <select disabled={disabled}>
        <option className={styles.option}>{options[0]}</option>
        <option className={styles.option}>{options[1]}</option>
        <option className={styles.option}>{options[2]}</option>
        <option className={styles.option}>{options[3]}</option>
        <option className={styles.option}>{options[4]}</option>
      </select>
    </div>
  );
}

interface Props {
  title: string;
  options: [string, string, string, string, string];
  disabled?: boolean;
}
